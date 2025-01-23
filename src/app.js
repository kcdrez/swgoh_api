import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { routes as rootRoutes } from "./rootRoutes.js";
import { routes as playerRoutes } from "./player/routes.js";
import { routes as gearRoutes } from "./gear/routes.js";
import { routes as relicRoutes } from "./relic/routes.js";
import { routes as unitRoutes } from "./unit/routes.js";
import { routes as ggRoutes } from "./gg/routes.js";
import { routes as userRoutes } from "./user/routes.js";
import { routes as opponentRoutes } from "./opponent/routes.js";
import { routes as guildRoutes } from "./guild/routes.js";
import { routes as debugRoutes } from "./debug/routes.js";

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

export default app;
