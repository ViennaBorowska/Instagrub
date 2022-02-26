const seedUsers = require("./user_seed");
const seedRecipe = require("./recipe_seed");
const seedComments = require("./comment_seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedRecipe();
  await seedComments();
  process.exit(0);
};

seedAll();
