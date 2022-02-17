const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { routes: rootRoutes } = require("./rootRoutes");
const { routes: playerRoutes } = require("./player/routes");
const { routes: gearRoutes } = require("./gear/routes");
const { routes: relicRoutes } = require("./relic/routes");
const { routes: unitRoutes } = require("./unit/routes");
const { routes: ggRoutes } = require("./gg/routes");
const { routes: helpRoutes } = require("./help/routes");
const { routes: userRoutes } = require("./user/routes");
const { routes: opponentRoutes } = require("./opponent/routes");
const { routes: guildRoutes } = require("./guild/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", rootRoutes);
app.use("/player", playerRoutes);
app.use("/gear", gearRoutes);
app.use("/relic", relicRoutes);
app.use("/unit", unitRoutes);
app.use("/gg", ggRoutes);
app.use("/help", helpRoutes);
app.use("/user", userRoutes);
app.use("/opponent", opponentRoutes);
app.use("/guild", guildRoutes);

module.exports = app;
