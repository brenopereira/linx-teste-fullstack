const { Product, Category } = require("../models");

module.exports = {
  async index(req, res) {
    const { id, type } = req.params;

    if (type === "complete") {
      const products = await Product.findByPk(id, {
        include: [
          {
            model: Category,
            through: "product_categories",
            as: "categories",
            foreignKey: "productId",
            attributes: ["id", "name"]
          }
        ]
      });

      res.json(products);
    } else {
      const products = await Product.findByPk(id, {
        attributes: ["id", "name"],
        include: [
          {
            model: Category,
            through: "product_categories",
            as: "categories",
            foreignKey: "productId",
            attributes: ["id", "name"]
          }
        ]
      });

      res.json(products);
    }
  }
};
