const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const moment = require("moment");
const sha512 = require("js-sha512");

const db = new AWS.DynamoDB.DocumentClient();

class DbClient {
  constructor() {}

  async getUserById(id) {
    const params = {
      TableName: "usersTable",
      Key: {
        id,
      },
    };
    const result = await db.get(params).promise();
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
    const result = await db.scan(params).promise();
    return result.Items[0];
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
    await db.put(params).promise();
    return params.Item;
  }

  async getAllUsers() {
    const params = {
      TableName: "usersTable",
    };
    return await db.scan(params).promise();
  }

  async updateUser(id, { gear, relic, planner, energyData, teams, shards }) {
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

    if (expressions.length > 0) {
      const params = {
        TableName: "usersTable",
        Key: { id },
        UpdateExpression: `SET ${expressions.join(", ")}`,
        ExpressionAttributeValues: values,
      };
      await db.update(params).promise();
    }
  }
}

module.exports = new DbClient();
