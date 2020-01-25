const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/catalogs", (req, res) => res.send("Hello Catalog API"));

app.listen(3002, () =>
  console.log(`Product Catalog Microservice API listening on port 3002!`)
);
