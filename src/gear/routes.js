const express = require("express");
const axios = require("axios");

const { baseUrl } = require("../utils");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", async (_req, res) => {
  const response = await axios.get(`${baseUrl}/gear`);
  res.status(200).json(response.data);
});

module.exports = {
  routes,
};
