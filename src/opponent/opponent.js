import dbClient from "../db/dynamoDbClient";

class Opponent {
  constructor() {}

  async updateOpponentTeams(playerId, opponentAllyCode, teams) {
    await dbClient.updateOpponentTeams(playerId, { teams, opponentAllyCode });
  }

  async fetchOpponent(playerId) {
    return await dbClient.getOpponents(playerId);
  }

  async deleteOpponent(playerId) {
    return await dbClient.deleteOpponent(playerId);
  }

  async updateMatches(playerId, matches) {
    await dbClient.updateOpponentTeams(playerId, { matches });
  }
}

module.exports = new Opponent();
