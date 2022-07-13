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

    const player = await this.mapPlayer(name, allyCode, roster, ggPlayer);

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
    }

    return player;
  }

  async fetchPlayers(unitId, ggPlayers) {
    const players = [];

    for (let i = 0; i <= ggPlayers.length - 1; i++) {
      const player = ggPlayers[i];
      players.push({
        units: player.units
          .map((x) => {
            const { relic_tier, rarity, ...restUnit } = x.data;
            return {
              relic_tier: relic_tier - 2,
              stars: rarity,
              ...restUnit,
            };
          })
          .filter((x) => x.base_id === unitId),
        name: player.data.name,
        updated: player.data.last_updated,
        allyCode: player.data.ally_code,
      });
    }

    return players;
  }

  async mapPlayer(name, allyCode, roster, ggPlayer, unitId) {
    const unitList = [];
    for (let i = 0; i < roster.length; i++) {
      const { mods, crew, defId } = roster[i];

      if (unitId && defId !== unitId) {
        continue;
      }

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
            zeta_abilities,
            omicron_abilities,
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
            zeta_abilities,
            omicron_abilities,
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
}

module.exports = new Player();
