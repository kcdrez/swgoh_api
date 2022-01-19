const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const unitsList = require("./seedData");

class Unit {
  unitMapping = {};
  expires = {};

  constructor() {
    unitsList.filter(x => x.obtainable && x.id.includes(":SEVEN_STAR"))
    .forEach(unit => {
      this.unitMapping[unit.baseId] = unit;
      this.expires[unit.baseId] = moment().add(7, "days");
    })
  }

  async fetchUnit(unitId) {
    unitId = unitId.toUpperCase();
    if (!!this.unitMapping[unitId] && moment().isBefore(this.expires[unitId])) {
      console.info("Using unit cache", unitId);
      return this.unitMapping[unitId];
    } else {
      console.info("Fetching unit data from help API", unitId);
      this.expires[unitId] = moment().add(7, "days");
      const unit = await helpApi.fetchUnit(unitId);
      this.unitMapping[unitId] = unit;
      return unit;
    }
  }

  async refresh(unitId) {
    delete this.unitMapping[unitId];
    delete this.expires[unitId];
    return this.fetchUnit(unitId);
  }
}

module.exports = new Unit();
