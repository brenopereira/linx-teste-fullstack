"use strict";

module.exports = function(app) {
  var products = require("./app/controllers/ProductController");

  app.route("/products/:id/:type*?").get(products.index);
};
