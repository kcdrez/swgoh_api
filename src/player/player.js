import ggApi from "../api/swgoh.gg.js";
import unit from "../unit/unit.js";
import { getCrew } from "../gg/units/ships.js";
import dbClient from "../db/dynamoDbClient.js";

class Player {
  constructor() {}

  async fetchPlayer(allyCode) {
    const result = await dbClient.getUserByAllyCode(allyCode);
    const ggPlayer = await ggApi.fetchPlayer(allyCode);
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
      player.settings = result.settings || null;
    }

    return player;
  }

  async fetchPlayers(unitId, ggPlayers, guildData, guildId) {
    let players = [];

    const results = await Promise.all(
      ggPlayers.map((player) => {
        return ggApi.fetchPlayer(player.ally_code);
      })
    );

    for (let i = 0; i <= ggPlayers.length - 1; i++) {
      const player = ggPlayers[i];
      const matchPlayer = results.find(
        (p) => player.ally_code === p.data.ally_code
      );

      const unitList = matchPlayer.units.map((unit) => {
        const { relic_tier, rarity, ...restUnit } = unit.data;
        return {
          relic_tier: relic_tier - 2,
          stars: rarity,
          ...restUnit,
        };
      });

      players.push({
        units: unitList.filter((unit) => {
          if (!unitId) {
            return true;
          } else if (Array.isArray(unitId)) {
            return unitId.includes(unit.base_id);
          } else {
            return unit.base_id === unitId;
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

      try {
        const { base_id: id, ...unitData } = await unit.fetchUnit(base_id);
        const crew = getCrew(base_id);
        const mods = ggPlayer.mods.filter((mod) => {
          return mod.character === base_id;
        });

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
          mods,
          crew,
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
    const { data } = await ggApi.fetchPlayer(allyCode);
    await dbClient.createUser(allyCode, { name: data.name });
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

  async updateSettings(id, settings) {
    await dbClient.updateUser(id, { settings });
  }
}

export default new Player();
