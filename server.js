const bodyParser = require("body-parser");
const express = require("express");
const { default: initAPIRoutes } = require("./src/routers/api");

const app = express();
const http = require("http").createServer(app);

const PORT = 3001;

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
