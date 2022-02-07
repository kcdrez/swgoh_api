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

    const [{ roster, name, updated }, ggPlayer] = await Promise.all([
      helpApi.fetchPlayer(allyCode),
      ggApi.fetchPlayer(allyCode),
    ]);

    const unitList = [];
    for (let i = 0; i < roster.length; i++) {
      const { xp, mods, crew, defId } = roster[i];
      const match = ggPlayer.units.find((x) => x.data.base_id === defId);
      if (match) {
        try {
          const { base_id: id, ...unitData } = await unit.fetchUnit(defId);
          const {
            gear_level,
            level,
            power,
            gear,
            stats,
            ability_data,
            relic_tier,
            has_ultimate,
            rarity: stars,
          } = match.data;

          unitList.push({
            id,
            gear_level,
            level,
            power,
            gear,
            stats,
            ability_data,
            relic_tier: relic_tier - 2,
            has_ultimate,
            // xp,
            mods,
            crew,
            stars,
            ...unitData,
          });
        } catch (err) {
          console.error("error getting unit", defId);
        }
      } else {
        console.info("no unit match in ggPlayer units", defId);
      }
    }

    const player = {
      units: unitList,
      name,
      updated: ggPlayer.data.last_updated,
    };

    if (result) {
      player.gear = result.gear || {};
      player.relic = result.relic || {};
      player.planner = result.planner || {};
      player.energyData = result.energyData || {};
      player.teams = result.teams || [];
      player.shards = result.shards || {};
      player.id = result.id;
    }

    return {
      allyCode,
      ...player,
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
}

module.exports = new Player();
