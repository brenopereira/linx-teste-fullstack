const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const { Product } = require("./app/models");

app.get("/products", async (req, res) => {
  const products = await Product.cache().findByPk(1);
  res.json(products);
});

app.listen(3001, () =>
  console.log(`Product Microservice API listening on port 3001!`)
);
