const express = require("express");

// const apiClient = require("../api/swgoh.help");

const routes = express.Router({
  mergeParams: true,
});

// routes.get("/player/:allyCode", async (req, res) => {
//   try {
//     const response = await apiClient.fetchPlayer(req.params.allyCode);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.get("/gear", async (_req, res) => {
//   try {
//     const response = await apiClient.fetchGear();
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.get("/units", async (_req, res) => {
//   try {
//     const response = await apiClient.fetchAllUnits();
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.get("/unit/:unitId", async (req, res) => {
//   try {
//     const response = await apiClient.fetchUnit(req.params.unitId);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.get("/battles", async (_req, res) => {
//   try {
//     const response = await apiClient.battles();
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.get("/data/:collection", async (req, res) => {
//   try {
//     const response = await apiClient.data(req.params.collection);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// routes.get("/guild/:allyCode", async (req, res) => {
//   try {
//     const response = await apiClient.fetchGuild(req.params.allyCode);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

module.exports = {
  routes,
};
