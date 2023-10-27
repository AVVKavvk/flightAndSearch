const express = require("express");
const { PORT } = require("./config/serverConfig");
const cityRepository = require("./repository/city-repository");
const { CityServices } = require("./services/index");

function startServer() {
  const app = express();
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

    // const city = new CityServices();
    // city.createCity({ name: "harsh" });

    // city.updateCity(4, { name: "sikar" });
    // city.deleteCity(3);
  });
}
startServer();
