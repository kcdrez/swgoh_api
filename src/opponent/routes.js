const express = require("express");

const opponent = require("./opponent");

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

// routes.get("/:allyCode", async (req, res) => {
//   try {
//     const response = await player.fetchPlayer(req.params.allyCode);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.patch("/planner/:userId", async (req, res) => {
//   const { planner } = req.body;
//   if (!planner) {
//     res.status(500).json({ error: "Missing required field: planner" });
//   } else {
//     try {
//       await player.updatePlanner(req.params.userId, { planner });
//       res.status(200).json({ success: true });
//     } catch (err) {
//       res.status(500).json({
//         error: err.message,
//       });
//     }
//   }
// });

// routes.patch("/energy/:userId", async (req, res) => {
//   const { energy, refreshes } = req.body;
//   if (!energy) {
//     res.status(500).json({ error: "Missing required field: energy" });
//   } else if (!refreshes) {
//     res.status(500).json({ error: "Missing required field: refreshes" });
//   } else {
//     try {
//       await player.updateEnergyData(req.params.userId, { energy, refreshes });
//       res.status(200).json({ success: true });
//     } catch (err) {
//       res.status(500).json({
//         error: err.message,
//       });
//     }
//   }
// });

// routes.patch("/teams/:userId", async (req, res) => {
//   const { teams } = req.body;
//   if (!teams) {
//     res.status(500).json({ error: "Missing required field: teams" });
//   } else {
//     try {
//       await player.updateTeams(req.params.userId, { teams });
//       res.status(200).json({ success: true });
//     } catch (err) {
//       res.status(500).json({
//         error: err.message,
//       });
//     }
//   }
// });

// routes.patch("/shards/:userId", async (req, res) => {
//   const { shards } = req.body;
//   if (!shards) {
//     res.status(500).json({ error: "Missing required field: shards" });
//   } else {
//     try {
//       await player.updateOwnedShards(req.params.userId, { shards });
//       res.status(200).json({ success: true });
//     } catch (err) {
//       res.status(500).json({
//         error: err.message,
//       });
//     }
//   }
// });

module.exports = {
  routes,
};
