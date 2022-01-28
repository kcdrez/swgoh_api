const express = require("express");

const gear = require("./gear");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", async (_req, res) => {
  try {
    const gearList = await gear.fetchGear();
    res.status(200).json(gearList);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/refresh", async (req, res) => {
  try {
    const response = await gear.refresh();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.patch("/:userId", async (req, res) => {
  const params = {
    TableName: "usersTable",
    Item: {
      id: req.params.userId,
      allyCode: req.body.allyCode,
    },
  };
  await db.put(params).promise();
  res.status(200).json({ user: params.Item });
});

module.exports = {
  routes,
};
