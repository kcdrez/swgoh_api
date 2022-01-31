const moment = require("moment");

const helpApi = require("../api/swgoh.help");
const ggApi = require("../api/swgoh.gg");
const dbClient = require("../db/dynamoDbClient");
const gearList = require("./seedData")

class Gear {
  constructor() { }

  async fetchGear() {
    return gearList;

    console.info("Fetching gear data from both APIs");

    const helpApiGearList = helpApi.fetchGear();
    const ggApiGearList = ggApi.fetchGear();
    const [gearList1, gearList2] = await Promise.all([
      helpApiGearList,
      ggApiGearList,
    ]);
    const fullGearList = gearList1.map(({ id, lookupMissionList, mark, tier }) => {
      const match = gearList2.find((x) => x.base_id === id);
      if (!match) {
        console.error("no match", gear.id);
        return null;
      } else {
        return {
          id,
          lookupMissionList,
          mark,
          tier,
          name: match.name,
          recipes: match.recipes,
          image: match.image,
          ingredients: match.ingredients,
        };
      }
    });

    this.gearList = fullGearList;
    return fullGearList;
  }

  async refresh() {
    this.gearList = [];
    this.expires.gearList = null;
    return this.fetchGear();
  }

  async updateGear(id, gearData) {
    await dbClient.updateUser(id, gearData);
  }
}

module.exports = new Gear();
