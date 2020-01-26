const { Product } = require("../models");

module.exports = {
  async index({ req, res }) {
    const SRProduct = sequelizeRedis.getModel(Product, { ttl: 60 * 60 * 24 });

    return await SRProduct.all();
  }
};
