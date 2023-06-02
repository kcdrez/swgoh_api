const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const dbClient = require("../db/dynamoDbClient");
const apiClient = require("../api/swgoh.gg");
const { tbMapping, tbNameMapping } = require("./tbMapping");
const { twMapping } = require("./twMapping");
const { raidMapping } = require("./raidMapping");
const player = require("../player/player");

class Guild {
  constructor() {}

  async createGuild(guildId) {
    return await dbClient.createGuild(guildId);
  }

  async fetchGuild(guildId) {
    const response = await dbClient.fetchGuild(guildId);

    if (response.territoryBattle) {
      response.territoryBattle = response.territoryBattle.map(
        ({ id, stars, nameId, date, characterShards }) => {
          const mappingData = tbMapping[nameId];
          const rewards = mappingData.rewards.find((rewardData) => {
            return moment(date).isBetween(
              rewardData.dates.start,
              rewardData.dates.end
            );
          });
          const starData = rewards.tiers[stars] || rewards.tiers["1"];
          const characterShardsData = { count: characterShards };

          if (nameId === "separatistMight") {
            characterShardsData.id = "WATTAMBOR";
          } else if (nameId === "imperialRetaliation") {
            characterShardsData.id = "IMPERIALPROBEDROID";
          } else if (nameId === "rebelAssault") {
            characterShardsData.id = "HOTHLEIA";
          } else if (nameId === "republicOffensive") {
            characterShardsData.id = "KIADIMUNDI";
          } else if (nameId === "riseOfTheEmpire") {
            characterShardsData.id = "THIRDSISTER";
          }

          let type = "-";
          if (
            nameId === "separatistMight" ||
            nameId === "imperialRetaliation"
          ) {
            type = "Dark";
          } else if (
            nameId === "republicOffensive" ||
            nameId === "rebelAssault"
          ) {
            type = "Light";
          }

          return {
            id,
            date,
            type,
            name: mappingData.name,
            get1: starData.get1,
            get2: starData.get2,
            get3: starData.get3 || 0,
            stars,
            gear: starData.gear,
            crystals: starData.crystals,
            characterShards: characterShardsData,
          };
        }
      );
    }
    if (response.territoryWar) {
      response.territoryWar = response.territoryWar.map((war) => {
        const rewardsMap = twMapping.find((rewards) => {
          return moment(war.date).isBetween(
            rewards.dates.start,
            rewards.dates.end
          );
        });
        if (rewardsMap && war.guildGP) {
          const rewards =
            rewardsMap.rewards[war.guildGP][!!war.win ? "win" : "loss"];
          if (rewards) {
            return {
              ...war,
              ...rewards,
            };
          }
        }

        return {
          date: war.date,
          id: war.id,
          win: war.win,
          guildGP: -1,
          currencies: {
            get2: war.get2,
            get1: war.get1,
            guildStore: -1,
            credits: -1,
          },
          abilityMats: {
            zetas: war.zetas,
            omegas: -1,
            purple: -1,
          },
          relicMats: {
            aeros: -1,
            droidBrains: -1,
          },
          datacronMats: {
            mk3: -1,
            mk2: -1,
            mk1: -1,
            dataCache: -1,
          },
        };
      });
    }
    if (response.raidEvents) {
      response.raidEvents = response.raidEvents.map((event) => {
        const rewardsList = raidMapping[event.type];
        const rewardsMap = rewardsList.find((rewards) => {
          return moment(event.date).isBetween(
            rewards.dates.start,
            rewards.dates.end
          );
        });
        if (rewardsMap && event.score) {
          const rewards = rewardsMap.rewards.find((rewards) => {
            return (
              rewards.score.start * 1000000 <= event.score &&
              rewards.score.end * 1000000 >= event.score
            );
          });

          if (rewards) {
            return {
              ...rewards,
              ...event,
            };
          }
        }

        return {
          date: event.date,
          id: event.id,
          currencies: {
            raid1: event.raid1,
            raid2: event.raid2,
            raid3: event.raid3,
          },
        };
      });
    }
    return response;
  }

  async fetchAccess(guildId, allyCode) {
    return await apiClient.fetchAccess(guildId, allyCode);
  }

  async updateTerritoryWar(guildId, territoryWarEvents) {
    const territoryWar = territoryWarEvents.map((event) => {
      if (!event.id) {
        event.id = uuidv4();
      }
      delete event.currencies;
      delete event.abilityMats;
      delete event.relicMats;
      delete event.datacronMats;

      return event;
    });
    await dbClient.updateGuild(guildId, { territoryWar });
    return await this.fetchGuild(guildId);
  }

  async updateTerritoryBattle(guildId, territoryBattleEvents) {
    const territoryBattle = territoryBattleEvents.map((event) => {
      if (event.id) {
        return {
          id: event.id,
          stars: event.stars,
          date: event.date,
          characterShards: event.characterShards.count,
          nameId: tbNameMapping[event.name],
        };
      } else {
        event.id = uuidv4();
        event.nameId = tbNameMapping[event.name];
        delete event.name;
        return event;
      }
    });
    await dbClient.updateGuild(guildId, { territoryBattle });
    return await this.fetchGuild(guildId);
  }

  async updateRaidEvents(guildId, raidEvents) {
    console.log(raidEvents);
    const raidEventsList = raidEvents.map((event) => {
      if (event.id) {
        return {
          id: event.id,
          score: event.score,
          date: event.date,
          type: event.type,
        };
      } else {
        event.id = uuidv4();
        return event;
      }
    });
    await dbClient.updateGuild(guildId, { raidEvents: raidEventsList });
    return await this.fetchGuild(guildId);
  }

  async fetchGuildUnits(unitId, ggPlayers) {
    const players = await player.fetchPlayers(unitId, ggPlayers);
    if (Array.isArray(unitId) || !unitId) {
      return players;
    } else {
      return players.map(({ units, ...player }) => {
        const unit = units[0];
        return {
          unit,
          ...player,
        };
      });
    }
  }
}

module.exports = new Guild();
