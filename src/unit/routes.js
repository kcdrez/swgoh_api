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
