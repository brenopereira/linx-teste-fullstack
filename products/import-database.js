const fs = require("fs");
const { Product, Category, ProductCategory } = require("./app/models");

const productsCatalog = fs
  .readFileSync("./catalog.json")
  .toString()
  .split("\n");

productsCatalog.map(async row => {
  const product = JSON.parse(row);

  product.categories.map(async category => {
    const categories = await Category.findAll({
      where: {
        name: category.name
      }
    });

    if (categories.length) {
      console.log("existe");
    } else {
      console.log("nao existe");
    }
  });

  // Product.cache().create({
  //   name: product.details.name,
  //   price: product.price,
  //   last_price: product.oldPrice,
  //   status: product.status
  // });
});
