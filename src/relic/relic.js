import dbClient from "../db/dynamoDbClient.js";

class Relic {
  constructor() {}

  async updateRelic(id, relicData) {
    await dbClient.updateUser(id, relicData);
  }
}

export default new Relic();
