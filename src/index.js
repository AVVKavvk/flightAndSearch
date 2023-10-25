const express = require("express");
const { PORT } = require("./config/serverConfig");

function startServer() {
  const app = express();
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}
startServer();
