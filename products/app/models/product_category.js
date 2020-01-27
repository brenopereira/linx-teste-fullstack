module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "product_categories"
    }
  );

  return ProductCategory;
};
