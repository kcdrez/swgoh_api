const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const ggApi = require("../api/swgoh.gg");
const unit = require("../unit/unit");
const dbClient = require("../db/dynamoDbClient");

class Player {
  playerMapping = {};
  expires = {};

  constructor() {}

  async fetchPlayer(allyCode) {
    const result = await dbClient.getUserByAllyCode(allyCode);

    console.info("Fetching player data from both APIs", allyCode);

    const [{ roster, name }, ggPlayer] = await Promise.all([
      helpApi.fetchPlayer(allyCode),
      ggApi.fetchPlayer(allyCode),
    ]);

    const unitList = [];
    for (let i = 0; i < roster.length; i++) {
      const { xp, mods, crew, defId } = roster[i];
      const match = ggPlayer.units.find((x) => x.data.base_id === defId);
      if (match) {
        try {
          const { thumbnailName, unitTierList } = await unit.fetchUnit(defId);
          const {
            name,
            base_id: id,
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
            name,
            id,
            gear_level,
            level,
            power,
            gear,
            stats,
            ability_data,
            relic_tier: relic_tier - 2,
            has_ultimate,
            xp,
            mods,
            crew,
            stars,
            thumbnailName,
            unitTierList,
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
    };

    if (result) {
      player.gear = result.gear;
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
  }

  async refresh(allyCode) {
    delete this.playerMapping[allyCode];
    delete this.expires[allyCode];
    return await this.fetchPlayer(allyCode);
  }

  async debug() {
    const { thumbnailName, unitTierList, nameKey } = await fetchUnitData(
      "WATTAMBOR"
    );
  }
}

module.exports = new Player();
