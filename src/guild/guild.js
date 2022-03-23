const { v4: uuidv4 } = require("uuid");

const dbClient = require("../db/dynamoDbClient");
const apiClient = require("../api/swgoh.gg");
const { tbMapping, tbNameMapping } = require("./tbMapping");
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
          const starData = mappingData[stars];
          const characterShardsData = { count: characterShards };

          if (nameId === "separatistMight") {
            characterShardsData.id = "WATTAMBOR";
          } else if (nameId === "imperialRetaliation") {
            characterShardsData.id = "IMPERIALPROBEDROID";
          } else if (nameId === "rebelAssault") {
            characterShardsData.id = "HOTHLEIA";
          } else if (nameId === "republicOffensive") {
            characterShardsData.id = "KIADIMUNDI";
          }

          return {
            id,
            date,
            type:
              nameId === "separatistMight" || nameId === "imperialRetaliation"
                ? "Dark"
                : "Light",
            name: mappingData.name,
            get1: starData.get1,
            get2: starData.get2,
            stars,
            gear: starData.gear,
            crystals: starData.crystals,
            characterShards: characterShardsData,
          };
        }
      );
    }
    return response;
  }

  async fetchAccess(guildId, allyCode) {
    return await apiClient.fetchAccess(guildId, allyCode);
  }

  async updateTerritoryWar(guildId, territoryWar) {
    await dbClient.updateGuild(guildId, { territoryWar });
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

  async fetchGuildUnits(allyCodes, unitId) {
    const players = await player.fetchPlayers(allyCodes, unitId);
    return players.map(({ units, ...player }) => {
      const unit = units[0];
      return {
        unit,
        ...player,
      };
    });
  }
}

module.exports = new Guild();
