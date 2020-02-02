const { Product, Category, ProductCategory } = require("../app/models");

describe("Create product and save into database", () => {
  it("You must insert a product in the database.", async done => {
    await Category.create({
      name: "Nome da categoria"
    }).then(category => {
      category.save().then(async categorySaved => {
        if (categorySaved) {
          await Product.create({
            name: "Nome do produto",
            price: 10.0,
            last_price: 20.0,
            status: "AVALIABLE"
          }).then(product => {
            product.save().then(async productSaved => {
              await ProductCategory.create({
                categoryId: category.id,
                productId: product.id
              });
            });
          });
        }
      });
    });

    done();
  });
});
