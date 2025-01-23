import dbClient from "../db/dynamoDbClient.js";
import gearList from "./seedData.js";

class Gear {
  constructor() {}

  async fetchGear() {
    return gearList;
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

export default new Gear();
