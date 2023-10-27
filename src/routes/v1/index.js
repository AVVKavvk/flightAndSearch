const express = require("express");
const route = express.Router();
const cityControllers = require("../../controllers/city-controller");

route.post("/city", cityControllers.create);
route.delete("/city/:id", cityControllers.destory);
route.get("/city/:id", cityControllers.get);
route.get("/city", cityControllers.getAllCity);
route.put("/city/:id", cityControllers.update);

module.exports = route;
