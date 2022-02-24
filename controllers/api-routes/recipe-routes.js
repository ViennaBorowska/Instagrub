const router = require("express").Router();
const { Recipe } = require("../../models");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("The image file should be one of the following jpeg, jpg, png or gif");
  },
}).single("recipe_image");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.post("/add-recipe", upload, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      recipe_title: req.body.recipeName,
      recipe_cooking_time_hours: req.body.recipeCookingTimeHours,
      recipe_cooking_time_minutes: req.body.recipeCookingTimeMins,
      recipe_serves: req.body.recipeServes,
      recipe_summary: req.body.recipeSummary,
      recipe_ingredients: req.body.recipeIngredientsArr,
      recipe_method: req.body.recipeMethodsArr,
      recipe_image: req.file.path,
    });
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

(module.exports = router), { upload };
