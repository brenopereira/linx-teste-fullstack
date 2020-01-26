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

  return Product;
};
