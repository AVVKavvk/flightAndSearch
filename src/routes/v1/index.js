const express = require("express");
const route = express.Router();
const cityControllers = require("../../controllers/city-controller");
const airportControllers = require("../../controllers/airport-controller");

route.post("/city", cityControllers.create);
route.delete("/city/:id", cityControllers.destory);
route.get("/city/:id", cityControllers.get);
route.get("/city", cityControllers.getAllCity);
route.put("/city/:id", cityControllers.update);
route.post("/airport", airportControllers.create);
route.delete("/airport/:id", airportControllers.destory);
route.get("/airport/:id", airportControllers.get);
route.get("/airport", airportControllers.getAll);
route.put("/airport/:id", airportControllers.update);

module.exports = route;
