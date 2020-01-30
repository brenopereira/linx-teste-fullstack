module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      category_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER
    },
    {
      tableName: "product_categories"
    }
  );

  ProductCategory.associate = function(models) {
    ProductCategory.belongsTo(models.Product, { foreignKey: "product_id" });
    ProductCategory.belongsTo(models.ProductCategory, {
      foreignKey: "category_id"
    });
  };

  return ProductCategory;
};
