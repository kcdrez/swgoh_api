const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { routes: playerRoutes } = require("./player/routes");
const { routes: gearRoutes } = require("./gear/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/player", playerRoutes);
app.use("/gear", gearRoutes);

module.exports = app;

// app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`);
// });
