const express = require("express");
const route = express.Router();
const v1ApiRoute = require("./v1/index");
route.use("/v1", v1ApiRoute);

module.exports = route;
