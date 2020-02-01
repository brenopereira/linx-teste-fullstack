const { Product } = require("../models");

module.exports = {
  async index(req, res) {
    const { id, type } = req.params;

    const products = await Product.findByPk(id, {
      include: ["categories"]
    });

    res.json(products);
  }
};
