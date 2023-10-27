const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoute = require("./routes/index");
function startServer() {
  const app = express();
  app.listen(PORT, () => {
    app.use(express.json({ limit: "10mb" }));
    app.use("/api", apiRoute);
    console.log(`server is running on port ${PORT}`);
  });
}
startServer();
