import express from "express";
import Relic from "./relic";

const routes = express.Router({
  mergeParams: true,
});

routes.patch("/:userId", async (req, res) => {
  const { relic } = req.body;
  if (!relic) {
    res.status(500).json({ error: "Missing required field: relic" });
  } else {
    try {
      await Relic.updateRelic(req.params.userId, { relic });
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
