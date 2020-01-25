const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();
const port = 3000;
const { PRODUCTS_CATALOG_API_URL, PRODUCTS_API_URL } = require("./URLs");

const productsServiceProxy = httpProxy("products:3001", PRODUCTS_API_URL);

const productCatalogServiceProxy = httpProxy(
  "catalog:3002",
  PRODUCTS_CATALOG_API_URL
);

app.get("/", (req, res) => res.send("Hello Gateway API"));

app.get("/catalogs", (req, res, next) =>
  productCatalogServiceProxy(req, res, next)
);
app.get("/products", (req, res, next) => productsServiceProxy(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
