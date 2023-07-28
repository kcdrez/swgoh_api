const { v4: uuidv4 } = require("uuid");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const moment = require("moment");

const db = DynamoDBDocument.from(new DynamoDB());

class DbClient {
  constructor() {}

  async getUserById(id) {
    const params = {
      TableName: "usersTable",
      Key: {
        id,
      },
    };
    const result = await db.get(params);
    return result.Item;
  }

  async getUserByAllyCode(allyCode) {
    const params = {
      TableName: "usersTable",
      FilterExpression: "contains (allyCode, :allyCode)",
      ExpressionAttributeValues: {
        ":allyCode": allyCode,
      },
    };
    const result = await db.scan(params);

    if (result.Items.length > 0) {
      return result.Items[0];
    } else {
      return null;
    }
  }

  async createUser(allyCode, { name }) {
    const params = {
      TableName: "usersTable",
      Item: {
        id: uuidv4(),
        allyCode,
        gear: {},
        name,
        updatedAt: moment().unix(),
      },
    };
    await db.put(params);
    return params.Item;
  }

  async getAllUsers() {
    const params = {
      TableName: "usersTable",
    };
    return await db.scan(params);
  }

  async updateUser(
    id,
    {
      gear,
      relic,
      planner,
      energyData,
      teams,
      shards,
      wallet,
      currency,
      goalList,
      settings,
    }
  ) {
    const expressions = [];
    const values = {};
    if (gear) {
      expressions.push("gear = :gear");
      values[":gear"] = gear;
    }
    if (relic) {
      expressions.push("relic = :relic");
      values[":relic"] = relic;
    }
    if (planner) {
      expressions.push("planner = :planner");
      values[":planner"] = planner;
    }
    if (energyData) {
      expressions.push("energyData = :energyData");
      values[":energyData"] = energyData;
    }
    if (teams) {
      expressions.push("teams = :teams");
      values[":teams"] = teams;
    }
    if (shards) {
      expressions.push("shards = :shards");
      values[":shards"] = shards;
    }
    if (wallet) {
      expressions.push("wallet = :wallet");
      values[":wallet"] = wallet;
    }
    if (currency) {
      expressions.push("currency = :currency");
      values[":currency"] = currency;
    }
    if (goalList) {
      expressions.push("goalList = :goalList");
      values[":goalList"] = goalList;
    }
    if (settings) {
      expressions.push("settings = :settings");
      values[":settings"] = settings;
    }

    if (expressions.length > 0) {
      const params = {
        TableName: "usersTable",
        Key: { id },
        UpdateExpression: `SET ${expressions.join(", ")}`,
        ExpressionAttributeValues: values,
      };
      await db.update(params);
    }
  }

  async updateOpponentTeams(id, { teams, opponentAllyCode, matches }) {
    const expressions = [];
    const values = {};

    if (opponentAllyCode) {
      expressions.push("opponentAllyCode = :opponentAllyCode");
      values[":opponentAllyCode"] = opponentAllyCode;
    }

    if (teams) {
      expressions.push("teams = :teams");
      values[":teams"] = teams;
    }

    if (matches) {
      expressions.push("matches = :matches");
      values[":matches"] = matches;
    }

    if (expressions.length > 0) {
      const params = {
        TableName: "opponentsTable",
        Key: { id },
        UpdateExpression: `SET ${expressions.join(", ")}`,
        ExpressionAttributeValues: values,
      };
      await db.update(params);
    }
  }

  async getOpponents(id) {
    const params = {
      TableName: "opponentsTable",
      Key: {
        id,
      },
    };
    const result = await db.get(params);
    return result.Item;
  }

  async deleteOpponent(id) {
    const params = {
      TableName: "opponentsTable",
      Key: {
        id,
      },
    };
    await db.delete(params);
  }

  async createGuild(guildId) {
    const params = {
      TableName: "guildTable",
      Item: {
        id: guildId,
      },
    };
    await db.put(params);
    return params.Item;
  }

  async fetchGuild(id) {
    const params = {
      TableName: "guildTable",
      Key: {
        id,
      },
    };
    const result = await db.get(params);
    return result.Item;
  }

  async updateGuild(
    id,
    { territoryWar, territoryBattle, raidEvents, goalList }
  ) {
    const expressions = [];
    const values = {};

    if (territoryWar) {
      expressions.push("territoryWar = :territoryWar");
      values[":territoryWar"] = territoryWar;
    }

    if (territoryBattle) {
      expressions.push("territoryBattle = :territoryBattle");
      values[":territoryBattle"] = territoryBattle;
    }

    if (raidEvents) {
      expressions.push("raidEvents = :raidEvents");
      values[":raidEvents"] = raidEvents;
    }

    if (goalList) {
      expressions.push("goalList = :goalList");
      values[":goalList"] = goalList;
    }

    if (expressions.length > 0) {
      const params = {
        TableName: "guildTable",
        Key: { id },
        UpdateExpression: `SET ${expressions.join(", ")}`,
        ExpressionAttributeValues: values,
      };
      await db.update(params);
    }
  }
}

module.exports = new DbClient();
