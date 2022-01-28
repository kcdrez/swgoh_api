const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
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

  async createUser(allyCode) {
    const params = {
      TableName: "usersTable",
      Item: {
        id: uuidv4(),
        allyCode,
        gear: {},
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

  async updateUser(id, { gear }) {
    const params = {
      TableName: "usersTable",
      Key: { id },
      UpdateExpression: `SET gear = :gear`,
      ExpressionAttributeValues: {
        ":gear": gear || {},
      },
    };
    await db.update(params).promise();
  }
}

module.exports = new DbClient();
