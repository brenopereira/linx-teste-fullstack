const { Product } = require("../models");

module.exports = {
  async index(req, res) {
    const { id, type } = req.params;

    // if (typeof type != undefined) {
    //   const products = await Product.cache().findByPk(id);

    //   res.json(products);
    // } else {
    const products = await Product.cache("products").findAll({
      include: "categories"
    });

    res.json(products);
    // }
  }
};
