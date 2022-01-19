const express = require("express");

const { version } = require("../package.json");
const Unit = require("./unit/unit");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/metadata", async (req, res) => {
  try {
    res.status(200).json({ version });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = {
  routes,
};
