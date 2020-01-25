const fs = require("fs");
const { Product } = require("./app/models");

const productsCatalog = fs
  .readFileSync("./catalog.json")
  .toString()
  .split("\n");

productsCatalog.map(row => {
  const product = JSON.parse(row);

  Product.create({
    name: product.details.name,
    price: product.price,
    last_price: product.oldPrice,
    status: product.status
  });
});
