const router = require("express").Router();
const { Recipe, User, Comments } = require("../../models");
const multer = require("multer");
const path = require("path");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

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
  console.log(req.body);
  try {
    const newRecipe = await Recipe.create({
      recipe_title: req.body.recipe_title,
      recipe_cooking_time_hours: req.body.recipe_hours,
      recipe_cooking_time_minutes: req.body.recipe_mins,
      recipe_serves: req.body.recipe_serves,
      recipe_summary: req.body.recipe_summary,
      recipe_ingredients: req.body.recipe_ingredients,
      recipe_method: req.body.recipe_method,
      recipe_diet: req.body.recipe_diet,
      recipe_spice: req.body.recipe_spice,
      recipe_veg: req.body.recipe_veg,
      recipe_fish: req.body.recipe_fish,
      recipe_shellfish: req.body.recipe_shellfish,
      recipe_ingredients_tags: req.body.recipe_ingredients_tags,
      recipe_cuisine: req.body.recipe_cuisine,
      recipe_likes: 0,
      recipe_image: req.file.path,
      recipe_jam: req.body.recipe_jam,
      user_id: req.session.user_id,
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

router.put("/update-recipe/:id", upload, async (req, res) => {
  console.log(req.body);
  try {
    const updateRecipe = await Recipe.update(
      {
        recipe_title: req.body.recipe_title,
        recipe_cooking_time_hours: req.body.recipe_hours,
        recipe_cooking_time_minutes: req.body.recipe_mins,
        recipe_serves: req.body.recipe_serves,
        recipe_summary: req.body.recipe_summary,
        recipe_ingredients: req.body.recipe_ingredients,
        recipe_method: req.body.recipe_method,
        recipe_image: req.file.path,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updateRecipe);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.put("/update-recipe-likes/:id", async (req, res) => {
  try {
    const updateRecipeLikes = await Recipe.increment(
      { recipe_likes: 1 },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updateRecipeLikes);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

//-----------Search by ingredients -----------
router.post("/search", async (req, res) => {
  console.log("INSIDE");
  console.log(req.body);
  console.log(req.body.searchInput);

  try {
    const recipeCards = (
      await Recipe.findAll({
        where: {
          [op.or]: [
            { recipe_title: { [op.like]: "%" + req.body.searchInput + "%" } },

            {
              recipe_ingredients: {
                [op.like]: "%" + req.body.searchInput + "%",
              },
            },
          ],
        },
        include: [{ model: User }, { model: Comments }],
      })
    ).map((recipeCard) => recipeCard.get({ plain: true }));
    res.status(200).json(recipeCards);
    // res.render("searchresult", {
    //   recipeCards,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

(module.exports = router), { upload };
