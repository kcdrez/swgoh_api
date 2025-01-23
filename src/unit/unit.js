import ggApi from "../api/swgoh.gg.js";
import unitsList from "../gg/units/index.js";
import abilityStats from "./abilityStats.js";
import shardFarmingData from "./farming/index.js";

class Unit {
  constructor() {}

  async fetchUnit(unitId) {
    unitId = unitId.toUpperCase();

    const match = unitsList.find((x) => x.id === unitId);
    if (match) {
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
    return await ggApi.fetchUnits();
  }

  getAbilityStats() {
    return abilityStats;
  }

  getShardFarming() {
    return shardFarmingData;
  }
}

export default new Unit();
