const express = require("express");
const route = express.Router();
const cityControllers = require("../../controllers/city-controller");
const airportControllers = require("../../controllers/airport-controller");
const airplaneControllers = require("../../controllers/airplane-controller");

route.post("/city", cityControllers.create);
route.delete("/city/:id", cityControllers.destroy);
route.get("/city/:id", cityControllers.get);
route.get("/city", cityControllers.getAllCity);
route.put("/city/:id", cityControllers.update);

route.post("/airport", airportControllers.create);
route.delete("/airport/:id", airportControllers.destroy);
route.get("/airport/:id", airportControllers.get);
route.get("/airport", airportControllers.getAll);
route.put("/airport/:id", airportControllers.update);

route.post("/airplane", airplaneControllers.create);
route.delete("/airplane/:id", airplaneControllers.destroy);
route.get("/airplane/:id", airplaneControllers.get);
route.get("/airplane", airplaneControllers.getAll);
route.put("/airplane/:id", airplaneControllers.update);

module.exports = route;
