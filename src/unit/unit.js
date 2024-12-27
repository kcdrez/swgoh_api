import ggApi from "../api/swgoh.gg";
import unitsList from "../gg/units";
import abilityStats from "./abilityStats";
import shardFarmingData from "./farming";

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

module.exports = new Unit();
