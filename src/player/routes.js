import express from "express";
import player from "./player.js";

const routes = express.Router({
  mergeParams: true,
});

routes.post("/:allyCode", async (req, res) => {
  const { allyCode } = req.params;
  if (!allyCode) {
    res.status(500).json({ error: "Missing required field: allyCode" });
  } else {
    try {
      const result = await player.createUser(allyCode);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
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

routes.patch("/shards/:userId", async (req, res) => {
  const { shards } = req.body;
  if (!shards) {
    res.status(500).json({ error: "Missing required field: shards" });
  } else {
    try {
      await player.updateOwnedShards(req.params.userId, { shards });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.patch("/wallet/:userId", async (req, res) => {
  const { wallet } = req.body;
  if (!wallet) {
    res.status(500).json({ error: "Missing required field: wallet" });
  } else {
    try {
      await player.updateWallet(req.params.userId, wallet);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.patch("/dailyCurrency/:userId", async (req, res) => {
  const { currency } = req.body;
  if (!currency) {
    res.status(500).json({ error: "Missing required field: currency" });
  } else {
    try {
      await player.updateCurrency(req.params.userId, currency);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.patch("/goalList/:userId", async (req, res) => {
  const { goalList } = req.body;
  if (!goalList) {
    res.status(500).json({ error: "Missing required field: goalList" });
  } else {
    try {
      await player.updateGoalList(req.params.userId, goalList);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.patch("/settings/:userId", async (req, res) => {
  const { settings } = req.body;
  if (!settings) {
    res.status(500).json({ error: "Missing required field: settings" });
  } else {
    try {
      await player.updateSettings(req.params.userId, settings);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

export { routes };
