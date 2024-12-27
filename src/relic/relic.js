import dbClient from "../db/dynamoDbClient";

class Relic {
  constructor() {}

  async updateRelic(id, relicData) {
    await dbClient.updateUser(id, relicData);
  }
}

module.exports = new Relic();
