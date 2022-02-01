const express = require("express");

const player = require("./player");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/refresh/:allyCode", async (req, res) => {
  try {
    const response = await player.refresh(req.params.allyCode);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.post("/:allyCode", async (req, res) => {
  const { allyCode } = req.params;
  if (!allyCode) {
    res.status(500).json({ error: "Missing required field: allyCode" });
  } else {
    try {
      await player.createUser(allyCode);
      res.status(201).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

routes.get("/debug", async (req, res) => {
  try {
    const response = await player.debug();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/:allyCode", async (req, res) => {
  try {
    const response = await player.fetchPlayer(req.params.allyCode);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.patch("/planner/:userId", async (req, res) => {
  const { planner } = req.body;
  if (!planner) {
    res.status(500).json({ error: "Missing required field: planner" });
  } else {
    try {
      await player.updatePlanner(req.params.userId, { planner });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.patch("/energy/:userId", async (req, res) => {
  const { energy, refreshes } = req.body;
  if (!energy) {
    res.status(500).json({ error: "Missing required field: energy" });
  } else if (!refreshes) {
    res.status(500).json({ error: "Missing required field: refreshes" });
  } else {
    try {
      await player.updateEnergyData(req.params.userId, { energy, refreshes });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.patch("/teams/:userId", async (req, res) => {
  const { teams } = req.body;
  if (!teams) {
    res.status(500).json({ error: "Missing required field: teams" });
  } else {
    try {
      await player.updateTeams(req.params.userId, { teams });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

module.exports = {
  routes,
};
