const moment = require("moment");

const helpApi = require("../api/swgoh.help");

class Unit {
  unitMapping = {};
  expires = {};

  constructor() {}

  async fetchUnit(unitId) {
    if (!!this.unitMapping[unitId] && moment().isBefore(this.expires[unitId])) {
      console.info("Using unit cache", unitId);
      return this.unitMapping[unitId];
    } else {
      console.info("Fetching unit data from help API", unitId);
      this.expires[unitId] = moment().add(1, "days");
      const unit = await helpApi.fetchUnit(unitId);
      this.unitMapping[unitId] = unit;
      return unit;
    }
  }
}

module.exports = new Unit();
