import express from "express";
import guild from "./guild.js";
import apiClient from "../api/swgoh.gg.js";
import units from "../gg/units/units.js";
import { ships } from "../gg/units/ships.js";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const routes = express.Router({
  mergeParams: true,
});

routes.get("/ers", async (_req, res) => {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folder = path.join(__dirname, "ers/members");

    const files = await readdir(folder);
    const moduleFiles = files.filter((f) => f.endsWith(".js"));
    // .filter((f) => f !== "guildData.js");

    const results = [];

    for (const file of moduleFiles) {
      const modulePath = path.join(folder, file);
      const { default: content } = await import(modulePath);

      const { data, units } = content;
      results.push({ data, units });
    }

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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

routes.get("/:guildId/:unitId", async (req, res) => {
  try {
    const guildResponse = await apiClient.fetchGuild(req.params.guildId);
    const guildData = await guild.fetchGuildUnits(
      req.params.unitId,
      guildResponse.members,
      req.params.guildId
    );
    res.status(200).json(guildData);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.post("/:guildId/units", async (req, res) => {
  try {
    const { unitIds } = req.body;
    const guildResponse = await apiClient.fetchGuild(req.params.guildId);
    const guildData = await guild.fetchGuildUnits(
      unitIds,
      guildResponse.members,
      req.params.guildId
    );

    res.status(200).json(guildData);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.post("/:guildId/stats", async (req, res) => {
  try {
    const guildResponse = await apiClient.fetchGuild(req.params.guildId);
    const guildData = await guild.fetchGuildUnits(
      null,
      guildResponse.members,
      req.params.guildId
    );

    const data = guildData.reduce(
      (acc, player) => {
        player.units.forEach((unit) => {
          const matchCharacter = units.find((x) => x.id === unit.base_id);
          const matchShip = ships.find((x) => x.id === unit.base_id);
          if (matchCharacter) {
            if (matchCharacter.alignment === "Light Side") {
              acc.characters.lightSide += unit.power;
            } else if (matchCharacter.alignment === "Dark Side") {
              acc.characters.darkSide += unit.power;
            } else {
              acc.characters.neutral += unit.power;
            }
          } else if (matchShip) {
            if (matchShip.alignment === "Light Side") {
              acc.ships.lightSide += unit.power;
            } else if (matchShip.alignment === "Dark Side") {
              acc.ships.darkSide += unit.power;
            } else {
              acc.ships.neutral += unit.power;
            }
          } else {
            console.info("no match", unit.id);
          }
          if (unit.relic_tier > 1) {
            acc.units.push({
              owner: player.name,
              relicLevel: unit.relic_tier,
              id: unit.base_id,
              name: unit.name,
              alignment: unit.alignment,
            });
          }
        });
        return acc;
      },
      {
        ships: {
          lightSide: 0,
          darkSide: 0,
          neutral: 0,
        },
        characters: {
          lightSide: 0,
          darkSide: 0,
          neutral: 0,
        },
        total: guildResponse.galactic_power,
        units: [],
      }
    );
    res.status(200).json(data);
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

routes.patch("/:guildId/territoryBattle", async (req, res) => {
  const { territoryBattleEvents } = req.body;
  const { guildId } = req.params;
  if (!territoryBattleEvents) {
    res
      .status(500)
      .json({ error: "Missing required field: territoryBattleEvents" });
  } else {
    try {
      const result = await guild.updateTerritoryBattle(
        guildId,
        territoryBattleEvents
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

routes.patch("/:guildId/raidEvents", async (req, res) => {
  const { raidEvents } = req.body;
  const { guildId } = req.params;
  if (!raidEvents) {
    res.status(500).json({ error: "Missing required field: raidEvents" });
  } else {
    try {
      const result = await guild.updateRaidEvents(guildId, raidEvents);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

routes.patch("/:guildId/goals", async (req, res) => {
  const { goalList, refresh } = req.body;
  const { guildId } = req.params;
  if (!goalList) {
    res.status(500).json({ error: "Missing required field: goalList" });
  } else {
    try {
      const result = await guild.updateGuildGoals(guildId, goalList, refresh);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

export { routes };
