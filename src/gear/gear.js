const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const ggApi = require("../api/swgoh.gg");

class Gear {
  gearList = [];
  expires = {
    gearList: null,
  };

  constructor() {}

  async fetchGear() {
    if (this.gearList.length > 0 && moment().isBefore(this.expires.gearList)) {
      console.info("Using gear cache");
      return this.gearList;
    } else {
      console.info("Fetching gear data from both APIs");
      this.expires.gearList = moment().add(1, "days");

      const helpApiGearList = helpApi.fetchGear();
      const ggApiGearList = ggApi.fetchGear();
      const [gearList1, gearList2] = await Promise.all([
        helpApiGearList,
        ggApiGearList,
      ]);
      const fullGearList = gearList1.map((gear) => {
        const match = gearList2.find((x) => x.base_id === gear.id);
        if (!match) {
          console.error("no match", gear.id);
          return null;
        } else {
          return { ...gear, ...match };
        }
      });

      this.gearList = fullGearList;
      return fullGearList;
    }
  }
}

module.exports = new Gear();
