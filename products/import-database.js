const fs = require("fs");
const { Product, Category, ProductCategory } = require("./app/models");

const productsCatalog = fs
  .readFileSync("./catalog.json")
  .toString()
  .split("\n");

productsCatalog.map(async row => {
  const product = JSON.parse(row);

  // Cria o produto no banco de dados e busca se ele já existe
  const productCreated = await Product.findOrCreate({
    where: {
      name: product.details.name
    },
    defaults: {
      name: product.details.name,
      price: product.price,
      last_price: product.oldPrice,
      status: product.status
    }
  }).spread(async (row, created) => {
    if (created) {
      product.categories.map(async category => {
        await Category.findOrCreate({
          where: {
            name: category.name
          },
          defaults: {
            name: category.name
          }
        }).spread(async (category, created) => {
          if (created) {
            await ProductCategory.create({
              product_id: row.id,
              category_id: category.id
            });
          }
        });
      });
    }
  });
});
