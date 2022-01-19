const moment = require("moment");

const helpApi = require("../api/swgoh.help");

class Unit {
  unitMapping = {};
  expires = {};

  constructor() {}

  async init() {
    const start = new Date();
    console.info("start init");
    const response = await helpApi.fetchAllUnits();
    response.forEach((unit) => {
      this.expires[unit.id] = moment().add(7, "days");
      this.unitMapping[unit.id] = unit;
    });
    // await this.fetchUnit("WATTAMBOR");
    console.info("done init", new Date() - start);
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

  async refreshAll() {
    this.unitMapping = {};
    this.expires = {};
    await this.init();
  }
}

module.exports = new Unit();
