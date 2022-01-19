const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { routes: rootRoutes } = require("./rootRoutes");
const { routes: playerRoutes } = require("./player/routes");
const { routes: gearRoutes } = require("./gear/routes");
const { routes: unitRoutes } = require("./unit/routes");
// const Unit = require("./unit/unit");

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.all("*", initialize);
app.use("/", rootRoutes);
app.use("/player", playerRoutes);
app.use("/gear", gearRoutes);
app.use("/unit", unitRoutes);

module.exports = app;

// async function initialize(req, res, next) {
//   console.log("init middleware");
//   await Unit.init();
//   next();
// }
