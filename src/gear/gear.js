import dbClient from "../db/dynamoDbClient";
import gearList from "./seedData";

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

module.exports = new Gear();
