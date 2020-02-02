const fs = require("fs");
const { Product, Category, ProductCategory } = require("./app/models");

const productsCatalog = fs
  .readFileSync("./catalog.json")
  .toString()
  .split("\n");

productsCatalog.map(async row => {
  const product = JSON.parse(row);

  product.categories.map(async category => {
    await Category.findOrCreate({
      where: {
        name: category.name
      },
      defaults: {
        name: category.name
      }
    }).spread(async (category, created) => {
      await Product.create({
        name: product.details.name,
        price: product.price,
        last_price: product.oldPrice,
        status: product.status
      }).then(product => {
        product.save().then(async productSaved => {
          await ProductCategory.create({
            categoryId: category.id,
            productId: product.id
          });
        });
      });
    });
  });
});
