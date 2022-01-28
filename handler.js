const serverless = require("serverless-http");
const app = require("./src/index");

module.exports.app = serverless(app);

//https://www.youtube.com/watch?v=RRPZj-Pc4Uw
