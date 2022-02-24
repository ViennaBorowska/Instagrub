const router = require("express").Router();
const { User, Recipe, Comments } = require("../models");
const withAuth = require("../utils/auth");module.exports = router;

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/add-recipe", withAuth, async (req, res) => {
  try {
    res.render("add-recipe");
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/user", withAuth, async (req, res) => {
  try {
    const userFromDb = await User.findOne({
      where: { id: req.session.user_id },
      include: [
        {
          model: Recipe,
          attributes: ["id", "recipe_title", "recipe_image"],
        },
      ],
    });

    const user = userFromDb.get({ plain: true });

    return res.render("profile", {
      ...user,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

// Get Single Recipe
router.get("/recipe/:id", withAuth, async (req, res) => {
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
        include: [
          {
            model: User,
            attributes: ["username"],
          },
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
