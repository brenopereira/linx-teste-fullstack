module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING
    },
    {
      tableName: "categories"
    }
  );

  Category.associate = function(models) {
    Category.belongsToMany(models.ProductCategory, {
      through: "product_categories",
      foreignKey: "category_id",
      as: "categories"
    });
  };

  return Category;
};
