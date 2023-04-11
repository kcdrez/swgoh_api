const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const ggApi = require("../api/swgoh.gg");
const unit = require("../unit/unit");
const dbClient = require("../db/dynamoDbClient");

class Player {
  constructor() {}

  async fetchPlayer(allyCode) {
    const result = await dbClient.getUserByAllyCode(allyCode);

    console.info("Fetching player data from both APIs", allyCode);

    // const [{ roster, name }, ggPlayer] = await Promise.all([
    //   helpApi.fetchPlayer(allyCode),
    //   ggApi.fetchPlayer(allyCode),
    // ]);

    const ggPlayer = await ggApi.fetchPlayer(allyCode);

    // console.log("name", ggPlayer); //843518525

    const player = await this.mapPlayer(ggPlayer.data.name, allyCode, ggPlayer);

    if (result) {
      player.gear = result.gear || {};
      player.relic = result.relic || {};
      player.planner = result.planner || [];
      player.energyData = result.energyData || {};
      player.teams = result.teams || [];
      player.shards = result.shards || {};
      player.id = result.id;
      player.wallet = result.wallet || {};
      player.dailyCurrency = result.currency || {};
      player.goalList = result.goalList || [];
    }

    return player;
  }

  async fetchPlayers(unitId, ggPlayers) {
    const players = [];

    for (let i = 0; i <= ggPlayers.length - 1; i++) {
      const player = ggPlayers[i];
      const unitList = (await ggApi.fetchPlayer(player.ally_code)).units;
      players.push({
        units: unitList
          .map((x) => {
            const { relic_tier, rarity, ...restUnit } = x.data;
            return {
              relic_tier: relic_tier - 2,
              stars: rarity,
              ...restUnit,
            };
          })
          .filter((x) => {
            if (!unitId) {
              return true;
            } else if (Array.isArray(unitId)) {
              return unitId.includes(x.base_id);
            } else {
              return x.base_id === unitId;
            }
          }),
        name: player.player_name,
        allyCode: player.ally_code,
        totalGP: player.galactic_power,
      });
    }

    return players;
  }

  async mapPlayer(name, allyCode, ggPlayer, unitId) {
    const unitList = [];
    for (let i = 0; i < ggPlayer.units.length; i++) {
      // const { mods, crew, defId } = roster[i];
      const {
        gear_level,
        level,
        power,
        gear,
        stats,
        ability_data,
        zeta_abilities,
        omicron_abilities,
        relic_tier,
        has_ultimate,
        rarity: stars,
        base_id,
      } = ggPlayer.units[i].data;

      if (unitId && unitId !== base_id) {
        continue;
      }

      // const match = ggPlayer.units.find((x) => x.data.base_id === defId);
      try {
        const { base_id: id, ...unitData } = await unit.fetchUnit(base_id);

        unitList.push({
          id,
          gear_level,
          level,
          power,
          gear,
          stats,
          ability_data,
          zeta_abilities,
          omicron_abilities,
          relic_tier: relic_tier - 2,
          has_ultimate,
          mods: null, //todo
          crew: null, //todo
          stars,
          ...unitData,
        });
      } catch (err) {
        console.error("error getting unit", base_id, err);
      }
    }

    return {
      units: unitList,
      name,
      updated: ggPlayer.data.last_updated,
      guild_id: ggPlayer.data.guild_id,
      allyCode,
    };
  }

  async createUser(allyCode) {
    const { name } = await helpApi.fetchPlayer(allyCode);
    await dbClient.createUser(allyCode, { name });
    return await this.fetchPlayer(allyCode);
  }

  async updatePlanner(id, plannerData) {
    await dbClient.updateUser(id, plannerData);
  }

  async updateEnergyData(id, energyData) {
    await dbClient.updateUser(id, { energyData });
  }

  async updateTeams(id, teams) {
    await dbClient.updateUser(id, teams);
  }

  async updateOwnedShards(id, shards) {
    await dbClient.updateUser(id, shards);
  }

  async updateOpponentTeams(id, teams) {
    await dbClient.updateOpponentTeams(id, teams);
  }

  async updateWallet(id, wallet) {
    await dbClient.updateUser(id, { wallet });
  }

  async updateCurrency(id, currency) {
    await dbClient.updateUser(id, { currency });
  }

  async updateGoalList(id, goalList) {
    await dbClient.updateUser(id, { goalList });
  }
}

module.exports = new Player();
