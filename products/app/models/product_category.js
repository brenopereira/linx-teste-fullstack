module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      category_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
    },
    {
      tableName: "product_categories"
    }
  );

  return ProductCategory;
};
