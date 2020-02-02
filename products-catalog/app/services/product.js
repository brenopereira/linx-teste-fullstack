const { PRODUCTS_API_URL } = require("../../../URLs");
const Axios = require("axios");

module.exports = {
  async findProduct(product) {
    let productsAPI = [];

    await Axios.get(`${PRODUCTS_API_URL}/products/${product}`).then(
      async function(response) {
        await productsAPI.push(response.data);
      }
    );

    return productsAPI;
  }
};
