const { Product } = require("../models");

module.exports = {
  async index(req, res) {
    const { id, type } = req.params;

    console.log(typeof type);

    if (typeof type != undefined) {
      const products = await Product.cache().findByPk(id);
      res.json(products);
    } else {
      const products = await Product.cache("products").all();
      res.json(products);
    }
  }
};
