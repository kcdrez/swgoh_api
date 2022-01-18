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

module.exports = {
  routes,
};
