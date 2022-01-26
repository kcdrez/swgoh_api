const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const ggApi = require("../api/swgoh.gg");
const unit = require("../unit/unit");

class Player {
  playerMapping = {};
  expires = {};

  constructor() {}

  async fetchPlayer(allyCode) {
    if (
      !!this.playerMapping[allyCode] &&
      moment().isBefore(this.expires[allyCode])
    ) {
      console.info("Using player cache", allyCode);
      return this.playerMapping[allyCode];
    } else {
      console.info("Fetching player data from both APIs", allyCode);
      this.expires[allyCode] = moment().add(1, "days");
      const helpApiPlayer = helpApi.fetchPlayer(allyCode);
      const ggApiPlayer = ggApi.fetchPlayer(allyCode);

      const [helpPlayer, ggPlayer] = await Promise.all([
        helpApiPlayer,
        ggApiPlayer,
      ]);
      const { url, arena, fleet_arena, ally_code, name } = ggPlayer.data;

      const unitList = [];
      for (let i = 0; i < helpPlayer.roster.length; i++) {
        const { xp, mods, crew, defId } = helpPlayer.roster[i];
        const match = ggPlayer.units.find((x) => x.data.base_id === defId);
        if (match) {
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
        } else {
          console.info("no unit match in ggPlayer units", defId);
        }
      }

      const player = {
        url,
        arena,
        fleet_arena,
        units: unitList,
        ally_code,
        name,
      };

      this.playerMapping[allyCode] = player;
      return player;
    }
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
