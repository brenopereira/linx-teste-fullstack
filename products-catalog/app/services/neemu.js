const axios = require("axios");

module.exports = {
  findRecommended(showcase) {
    return axios
      .get(
        `https://wishlist.neemu.com/onsite/impulse-core/ranking/${showcase}.json`
      )
      .then(function(recommended) {
        return recommended;
      });
  }
};
