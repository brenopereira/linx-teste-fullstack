const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require("./routes");

app.use(bodyParser.json());

routes(app);

app.listen(3002, () =>
  console.log(`Product Catalog Microservice API listening on port 3002!`)
);
