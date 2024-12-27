import express from "exress";
import bodyParser from "body-parser";
import cors from "cors";

import { routes as rootRoutes } from "./rootRoutes";
import { routes as playerRoutes } from "./player/routes";
import { routes as gearRoutes } from "./gear/routes";
import { routes as relicRoutes } from "./relic/routes";
import { routes as unitRoutes } from "./unit/routes";
import { routes as ggRoutes } from "./g/routes";
import { routes as userRoutes } from "./user/routes";
import { routes as opponentRoutes } from "./opponent/routes";
import { routes as guildRoutes } from "./guild/routes";
import { routes as debugRoutes } from "./debug/routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", rootRoutes);
app.use("/player", playerRoutes);
app.use("/gear", gearRoutes);
app.use("/relic", relicRoutes);
app.use("/unit", unitRoutes);
app.use("/gg", ggRoutes);
app.use("/user", userRoutes);
app.use("/opponent", opponentRoutes);
app.use("/guild", guildRoutes);
app.use("/debug", debugRoutes);

module.exports = app;
