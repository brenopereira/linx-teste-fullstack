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

  Category.associate = models => {
    Category.belongsToMany(models.Product, {
      through: "product_categories",
      as: "products",
      foreignKey: "categoryId"
    });
  };

  return Category;
};
