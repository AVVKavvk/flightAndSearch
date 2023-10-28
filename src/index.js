const express = require("express");
const sequelize = require("sequelize");
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes/index");
const db = require("./models");
// const { AirportRepository } = require("./repository/index");
const { AirportService } = require("./services/index");
function startServer() {
  const app = express();
  app.listen(PORT, async () => {
    app.use(express.json({ limit: "10mb" }));
    app.use("/api", apiRoute);

    console.log(`server is running on port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    const airport = new AirportService();
    // airport.createAirport({
    //   name: "KKR International Airport",
    //   cityId: 8,
    // });
    // airport.deleteAirport(20);
    // airport.updateAirport(3, { name: "Saganer International Airport" });
    // airport.getAirport(18);
    // airport.getAllAirport({ name: "s" });
  });
}
startServer();
