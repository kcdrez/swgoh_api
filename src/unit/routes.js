const express = require("express");

const unit = require("./unit");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/refresh/:unitId", async (req, res) => {
  try {
    const response = await unit.refresh(req.params.unitId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/seedData", async (_req, res) => {
  try {
    const response = await unit.fetchAllUnits();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/unitList", async (_req, res) => {
  try {
    const response = await unit.getAllUnits();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/speedAbilities", async (_req, res) => {
  try {
    const response = await unit.getSpeedData();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/:unitId", async (req, res) => {
  try {
    const response = await unit.fetchUnit(req.params.unitId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = {
  routes,
};
