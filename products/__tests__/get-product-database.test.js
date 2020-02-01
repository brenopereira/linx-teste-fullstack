const { db, Product } = require("../app/models");

describe("Create product and save into database", () => {
  it("You must get a product with relationship from the database.", async done => {
    await Product.findByPk(1, { include: ["categories"] });
    done();
  });
});
