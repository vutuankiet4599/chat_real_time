const bodyParser = require("body-parser");
const express = require("express");
const { default: initAPIRoutes } = require("./src/routers/api");
require("dotenv").config();

const app = express();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

initAPIRoutes(app);

http.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
