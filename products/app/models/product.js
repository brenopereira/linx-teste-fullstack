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
    Product.belongsToMany(models.Category, {
      through: "ProductCategory",
      foreignKey: "product_id",
      as: "categories"
    });
  };

  Product.sync({ force: true });

  return Product;
};
