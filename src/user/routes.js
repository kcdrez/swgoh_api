import express from "express";
import dbClient from "../db/dynamoDbClient";

const routes = express.Router({
  mergeParams: true,
});

routes.post("/", async (req, res) => {
  const { allyCode } = req.body;
  if (!allyCode) {
    res.status(500).json({ error: "Missing required field: allyCode" });
  } else {
    try {
      const response = await dbClient.createUser(allyCode);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

routes.get("/:userId", async (req, res) => {
  try {
    const response = await dbClient.getUserById(req.params.userId);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

routes.patch("/:userId", async (req, res) => {
  try {
    await dbClient.updateUser(req.params.userId, req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  routes,
};
