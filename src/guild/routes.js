const express = require("express");

const guild = require("./guild");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/access/:guildId/:allyCode", async (req, res) => {
  try {
    const response = await guild.fetchAccess(
      req.params.guildId,
      req.params.allyCode
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/:guildId", async (req, res) => {
  try {
    const response = await guild.fetchGuild(req.params.guildId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.post("/:guildId", async (req, res) => {
  try {
    const response = await guild.createGuild(req.params.guildId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.patch("/:guildId/territoryWar", async (req, res) => {
  const { territoryWarEvents } = req.body;
  const { guildId } = req.params;
  if (!territoryWarEvents) {
    res
      .status(500)
      .json({ error: "Missing required field: territoryWarEvents" });
  } else if (!guildId) {
    res.status(500).json({ error: "Missing required field: guildId" });
  } else {
    try {
      const result = await guild.updateTerritoryWar(
        guildId,
        territoryWarEvents
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

module.exports = {
  routes,
};
