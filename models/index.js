const User = require("./User");
const Recipe = require("./Recipe");
const Comments = require("./Comments");

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

User.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comments.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Recipe.hasMany(Comments, {
  foreignKey: "recipe_id",
  onDelete: "cascade",
});

Comments.belongsTo(Recipe, {
  foreignKey: "recipe_id",
  onDelete: "cascade",
});

module.exports = { User, Recipe, Comments };
