"use strict";

module.exports = function(app) {
  var catalogs = require("./app/controllers/CatalogController");

  app.route("/catalogs").get(catalogs.index);
};
