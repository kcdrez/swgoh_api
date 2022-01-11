const express = require("express");
const axios = require("axios");

const { baseUrl } = require("../utils");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/:allycode", async (req, res) => {
  const response = await axios.get(`${baseUrl}/player/${req.params.allycode}`);
  res.status(200).json(response.data);
});

module.exports = {
  routes,
};
