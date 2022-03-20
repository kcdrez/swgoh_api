const express = require("express");

const guild = require("./guild");
const apiClient = require("../api/swgoh.gg");

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

routes.get("/:guildId/:unitId", async (req, res) => {
  try {
    const guildData = await apiClient.fetchGuild(req.params.guildId);

    /*
    {
      count: 1,
      stars: {
        1: 1
      },
      zetas: {
        1: 1,
        abilities: {
          id1: 1
        }
      },
      gearLevels: {
        12: 1,
        12_1: 1,
      },
      relicLevels: {
        1: 1
      },
      speed: {
        min: 1,
        max: 2,
        median: 1,
        mean: 1
      },
      users: [{
        id: xx,
        name: drezzinator,
        stars: 1,
        gearLevel: 1,
        zetas: 1,
        speed: 1
      }],
      unowned: [{
        id: xxx,
        name: drezzinator
      }]
    }
    */

    const unitMapping = {
      // stars: {
      // },
      zetas: {
      },
      gearLevels: {
      },
      relicLevels: {
      },
      // speed: {
      //   min: 0,
      //   max: 0,
      //   median: 0,
      //   mean: 0
      // },
      owned: [],
      unowned: []
    }

    guildData.players.forEach(player => {
      const unitMatch = player.units.find(unitEl => {
        return unitEl.data.base_id === req.params.unitId
      })
      if (unitMatch) {
        const equipped = unitMatch.data.gear.filter(x => x.is_obtained).length;
        const gearLevel = unitMatch.data.gear_level + (equipped / 10);
        const relicLevel = unitMatch.data.relic_tier - 2;

        if (unitMatch.data.gear_level >= 12) {

          if (unitMapping.gearLevels[gearLevel]) {
            unitMapping.gearLevels[gearLevel]++
          } else {
            unitMapping.gearLevels[gearLevel] = 1
          }
        }

        if (relicLevel >= 0) {
          if (unitMapping.relicLevels[relicLevel]) {
            unitMapping.relicLevels[relicLevel]++
          } else {
            unitMapping.relicLevels[relicLevel] = 1
          }
        }

        unitMapping.owned.push({
          allyCode: player.data.ally_code,
          name: player.data.name,
          gearLevel,
          relicLevel: Math.max(relicLevel, 0),
          zetas: unitMatch.data.zeta_abilities.length,
          speed: unitMatch.data.stats["5"]
        })
      } else {
        unitMapping.unowned.push({
          allyCode: player.data.ally_code,
          name: player.data.name,
        })
      }
    })

    const speedArr = unitMapping.owned.map(u => u.speed)

    unitMapping.speed = {
      min: Math.min(...speedArr),
      max: Math.max(...speedArr),
      average: speedArr.reduce((total, x) => total + x) / speedArr.length
    }

    res.status(200).json(unitMapping);
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

module.exports = {
  routes,
};
