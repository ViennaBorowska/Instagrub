const router = require("express").Router();
const { User, Recipe, Comments } = require("../models");
module.exports = router;

router.get("/", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// Get Single Recipe
router.get("/:id", async (req, res) => {
  try {
    const recipe = (
      await Recipe.findOne({
        where: { id: req.params.id },
        attributes: [
          "id",
          "recipe_title",
          "recipe_cooking_time",
          "recipe_serves",
          "recipe_summary",
          "recipe_ingredients",
          "recipe_method",
        ],
      })
    ).get({ plain: true });
    res.render("single-recipe", {
      ...recipe,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
