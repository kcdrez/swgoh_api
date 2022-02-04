const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const unitsList = require("./seedData");

class Unit {
  constructor() {}

  async fetchUnit(unitId) {
    unitId = unitId.toUpperCase();

    const match = unitsList.find((x) => x.baseId === unitId);
    if (match) {
      console.info("Using unit cache", unitId);
      return mapUnit(match);
    } else {
      console.info("Fetching unit data from help API", unitId);
      const unit = await helpApi.fetchUnit(unitId);
      return mapUnit(unit);
    }
  }

  async refresh(unitId) {
    return this.fetchUnit(unitId);
  }

  getAllUnits() {
    return unitsList.map(mapUnit);
  }

  async fetchAllUnits() {
    return await helpApi.fetchAllUnits();
  }
}

function mapUnit({ thumbnailName, baseId: id, nameKey: name, unitTierList }) {
  return {
    thumbnailName,
    id,
    name,
    unitTierList,
  };
}

module.exports = new Unit();
