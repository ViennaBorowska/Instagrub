const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_title: "Pasta",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 1,
    recipe_serves: 4,
    recipe_summary: "A quick and easy pasta dish to serve all the family.",
    recipe_ingredients: ["Penne", "Plus Tomatoes", "Mixed Italian Herbs"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    recipe_image: "uploads/1645705404056.jpeg",
    user_id: 1,
  },
  {
    recipe_title: "Fish Tandoori",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 30,
    recipe_serves: 4,
    recipe_summary: "A quick and easy tandoori dish to serve all the family.",
    recipe_ingredients: ["Fish", "Spices", "Oil"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    recipe_image: "uploads/1645705404056.jpeg",
    user_id: 1,
  },
  {
    recipe_title: "Dimsum",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 1,
    recipe_serves: 4,
    recipe_summary: "A quick and easy dimsum dish to serve all the family.",
    recipe_ingredients: ["Flour", "Spices", "Vegetables", "Oil"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    recipe_image: "uploads/1645705404056.jpeg",
    user_id: 1,
  },
  {
    recipe_title: "Noodles",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 1,
    recipe_serves: 4,
    recipe_summary: "A quick and easy noodle dish to serve all the family.",
    recipe_ingredients: ["Noodles", "Spices", "Vegetables", "Oil"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    recipe_image: "uploads/1645705404056.jpeg",
    user_id: 1,
  },
  {
    recipe_title: "Chicken Curry",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 1,
    recipe_serves: 4,
    recipe_summary: "A quick and easy chicken dish to serve all the family.",
    recipe_ingredients: ["Chicken", "Spices", "Vegetables", "Oil"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    recipe_image: "uploads/1645705404056.jpeg",
    user_id: 1,
  },
  {
    recipe_title: "Mutton Biriyani",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 1,
    recipe_serves: 4,
    recipe_summary: "A quick and easy biriyani dish to serve all the family.",
    recipe_ingredients: ["Mutton", "Spices", "Vegetables", "Oil"],
    recipe_method: [
      "Put pasta in water",
      "Cut up tomatoes",
      "sprinkle on pasta and tomatoes.",
    ],
    recipe_image: "uploads/1645705404056.jpeg",
    user_id: 1,
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
