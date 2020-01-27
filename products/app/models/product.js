module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      status: DataTypes.STRING,
      price: DataTypes.STRING,
      last_price: DataTypes.STRING
    },
    {
      tableName: "products"
    }
  );

  Product.associate = function(models) {
    Product.hasOne(models.Product, {
      foreignKey: "category_id",
      as: "product_categories"
    });
  };

  return Product;
};
