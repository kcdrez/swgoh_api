import express from "express";
import Gear from "./gear.js";
import gearList from "./seedData.js";

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", async (_req, res) => {
  try {
    const gearList = await Gear.fetchGear();
    res.status(200).json(gearList);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/refresh", async (req, res) => {
  try {
    const response = await Gear.refresh();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.patch("/:userId", async (req, res) => {
  const { gear } = req.body;
  if (!gear) {
    res.status(500).json({ error: "Missing required field: gear" });
  } else {
    try {
      await Gear.updateGear(req.params.userId, { gear });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
});

routes.get("/debug", async (req, res) => {
  try {
    res.status(200).json(gearList);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export { routes };
