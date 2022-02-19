const router = require("express").Router();
const { Recipe } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(200).json(newRecipe);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delRecipe = await Recipe.destroy({ where: { id: req.params.id } });
    res.status(200).json(delRecipe);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateRecipe = await Recipe.update(
      { recipe_title: req.body.recipe_title },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updateRecipe);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
