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

module.exports = {
  routes,
};
