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
    Category.belongsToMany(models.User, {
      through: "ProductCategory",
      foreignKey: "category_id",
      as: "categories"
    });
  };

  return Category;
};
