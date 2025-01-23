import express from "express";

const routes = express.Router({
  mergeParams: true,
});

routes.get("/metadata", async (req, res) => {
  try {
    res.status(200).json({ version: "1.0.0" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export { routes };
