const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_cooking_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_serves: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipe_ingredients: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    recipe_method: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    recipe_image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
