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

  Product.associate = models => {
    Product.belongsToMany(models.Category, {
      through: "product_categories",
      as: "categories",
      foreignKey: "productId"
    });
  };

  return Product;
};
