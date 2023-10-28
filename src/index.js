const express = require("express");
const sequelize = require("sequelize");
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes/index");
const db = require("./models");
// const { AirplaneRepository } = require("./repository/index");
// const { AirplaneService } = require("./services/index");
function startServer() {
  const app = express();
  app.listen(PORT, async () => {
    app.use(express.json({ limit: "10mb" }));
    app.use("/api", apiRoute);

    console.log(`server is running on port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    // const airplane = new AirplaneService();
    // airplane.createAirplane({
    //   modelNumber: "Airbus A342",
    //   capacity: 300,
    // });
    // airplane.deleteAirplane(7);
    // airplane.updateAirplane(8, {
    //   modelNumber: "Boeing 766",
    //   capacity: 350,
    // });
    // airplane.getAllAirplane("b");
    // airplane.getAirplane(6);
  });
}
startServer();
