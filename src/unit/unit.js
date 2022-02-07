const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const ggApi = require("../api/swgoh.gg");
const unitsList = require("../gg/unitData");
const speedData = require("./speedData");
const shardFarmingData = require("./farmingData");

class Unit {
  constructor() {}

  async fetchUnit(unitId) {
    unitId = unitId.toUpperCase();

    const match = unitsList.find((x) => x.id === unitId);
    if (match) {
      console.info("Using unit cache", unitId);
      return match;
    } else {
      console.error("Unit not in the cache list", unitId);
      throw Error("Unit not in the cache list", unitId);
    }
  }

  getAllUnits() {
    return unitsList;
  }

  async fetchAllUnits() {
    //very slow and might error out
    const [helpUnits, ggUnits] = await Promise.all([
      helpApi.fetchAllUnits(),
      ggApi.fetchUnits(),
    ]);

    return helpUnits.map((unit) => {
      const match = ggUnits.find((x) => x.base_id === unit.baseId);
      if (match) {
        return {
          thumbnailName: unit.thumbnailName,
          unitTierList: unit.unitTierList,
          name: match.name,
          id: match.base_id,
          alignment: match.alignment,
          categories: match.categories,
          ability_classes: match.ability_classes,
          role: match.role,
        };
      } else {
        console.info("No match from ggUnits", unit.id, unit.nameKey);
        return unit;
      }
    });
  }

  getSpeedData() {
    return speedData;
  }

  getShardFarming() {
    return shardFarmingData;
  }
}

module.exports = new Unit();
