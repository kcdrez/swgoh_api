import express from "express";
import opponent from "./opponent.js";

const routes = express.Router({
  mergeParams: true,
});

routes.get("/:playerId", async (req, res) => {
  const { playerId } = req.params;
  try {
    const result = await opponent.fetchOpponent(playerId);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

routes.delete("/:playerId", async (req, res) => {
  const { playerId } = req.params;
  try {
    await opponent.deleteOpponent(playerId);
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

routes.patch("/teams/:playerId", async (req, res) => {
  const { opponentAllyCode, teams } = req.body;
  const { playerId } = req.params;
  if (!teams) {
    res.status(500).json({ error: "Missing required field: teams" });
  } else if (!opponentAllyCode) {
    res.status(500).json({ error: "Missing required field: opponentAllyCode" });
  } else {
    try {
      const result = await opponent.updateOpponentTeams(
        playerId,
        opponentAllyCode,
        teams
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

routes.patch("/matches/:playerId", async (req, res) => {
  const { matches } = req.body;
  const { playerId } = req.params;
  if (!matches) {
    res.status(500).json({ error: "Missing required field: matches" });
  } else {
    try {
      const result = await opponent.updateMatches(playerId, matches);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

export { routes };
