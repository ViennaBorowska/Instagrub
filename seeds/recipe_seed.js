const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_title: "Pasta",
    recipe_cooking_time: 10,
    recipe_serves: 4,
    recipe_summary: "A quick and easy pasta dish to serve all the family.",
    recipe_ingredients: ["Penne", "Plus Tomatoes", "Mixed Italian Herbs"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    user_id: 1,
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
