const express = require("express");
const sequelize = require("sequelize");
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes/index");
const db = require("./models");
function startServer() {
  const app = express();
  app.listen(PORT, async () => {
    app.use(express.json({ limit: "10mb" }));
    app.use("/api", apiRoute);

    console.log(`server is running on port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    // const airports = await Airport.findAll({
    // include: City,
    //   include: [{ model: City }],
    // });
    // console.log(airports);
    // const newAirport = await Airport.create({
    //   name: "Mumbai Airport",
    //   cityId: 6,
    // });
    // console.log(newAirport);
    // const city = await City.findOne({
    //   where: {
    //     id: 7,
    //   },
    // });
    //   const newAirport = await Airport.findOne({
    //     where: {
    //       name: "Mumbai Airport",
    //     },
    //   });
    //   await city.addAirports(newAirport);
    // const airports = await city.getAirports();
    // console.log(airports);
  });
}
startServer();
