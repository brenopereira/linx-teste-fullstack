const { findRecommended } = require("../services/neemu");
const { findProduct } = require("../services/product");
const { PRODUCTS_API_URL } = require("../../URLs");
const Axios = require("axios");

module.exports = {
  async index(req, res) {
    const { maxProducts, showcase } = req.query;
    let productsAPI = [];

    await findRecommended(showcase).then(async function(recommended) {
      await recommended.data.map(async function(recomend) {
        await findProduct(recomend.recommendedProduct.id).then(function(
          product
        ) {
          productsAPI.push(product[0]);
        });
      });
    });

    const results = await Promise.all(productsAPI);

    await res.send(results);
  }
};
