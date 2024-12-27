import serverless from "serverless-http";
import app from "./src/index";

module.exports.handler = serverless(app);
