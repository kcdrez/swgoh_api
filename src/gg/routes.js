import express from "express";
import apiClient from "../api/swgoh.gg";

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

module.exports = {
  routes,
};
