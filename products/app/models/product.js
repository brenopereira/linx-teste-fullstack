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
    Product.hasMany(models.ProductCategory, {
      foreignKey: "category_id",
      as: "categories"
    });
  };

  return Product;
};
