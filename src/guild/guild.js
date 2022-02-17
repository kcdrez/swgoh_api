const dbClient = require("../db/dynamoDbClient");
const apiClient = require("../api/swgoh.gg");

class Guild {
  constructor() {}

  async createGuild(guildId) {
    return await dbClient.createGuild(guildId);
  }

  async fetchGuild(guildId) {
    return await dbClient.fetchGuild(guildId);
  }

  async fetchAccess(guildId, allyCode) {
    return await apiClient.fetchAccess(guildId, allyCode);
  }

  async updateTerritoryWar(guildId, territoryWar) {
    await dbClient.updateGuild(guildId, { territoryWar });
  }
}

module.exports = new Guild();
