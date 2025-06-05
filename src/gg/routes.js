import express from "express";
import apiClient from "../api/swgoh.gg.js";

const routes = express.Router({
  mergeParams: true,
});

routes.get("/player/:allyCode", async (req, res) => {
  try {
    const response = await apiClient.fetchPlayer(req.params.allyCode);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/gear", async (_req, res) => {
  try {
    const response = await apiClient.fetchGear();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/units", async (_req, res) => {
  try {
    const response = await apiClient.fetchUnits();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/ships", async (_req, res) => {
  try {
    const response = await apiClient.fetchShips();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/guild/:guildId", async (req, res) => {
  try {
    const response = await apiClient.fetchGuild(req.params.guildId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/abilityTypes", async (req, res) => {
  try {
    const units = await apiClient.fetchUnits();
    const abilities = await apiClient.fetchAbilities();

    abilities.forEach((ability) => {
      const matchUnit = units.find(
        (unit) => unit.base_id === ability.character_base_id
      );

      if (matchUnit) {
        const isPhysicalDamage = /deals?\s+physical damage/i.test(
          ability.description
        );
        const isSpecialDamage = /deals?\s+special damage/i.test(
          ability.description
        );
        const isTrueDamage = /deals?\s+true damage/i.test(ability.description);

        const damageTypes = [];

        if (isPhysicalDamage) {
          damageTypes.push("Physical");
        }
        if (isSpecialDamage) {
          damageTypes.push("Special");
        }
        if (isTrueDamage) {
          damageTypes.push("True");
        }

        const damageTypesList = [
          ...(matchUnit.damageTypes ?? []),
          ...damageTypes,
        ];
        const uniqueDamageTypes = [...new Set(damageTypesList)];
        matchUnit.damageTypes = uniqueDamageTypes;
      }
    });
    res.status(200).json(
      units.map(({ base_id, damageTypes }) => {
        return { base_id, damageTypes };
      })
    );
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/abilities", async (_req, res) => {
  try {
    const response = await apiClient.fetchAbilities();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export { routes };
