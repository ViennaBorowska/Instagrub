const router = require("express").Router();
const { route } = require("express/lib/application");
const { User, Recipe, Comments } = require("../models");
const withAuth = require("../utils/auth");
module.exports = router;

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

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

// ----------------------------------------------------------- dashboard start

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const recipeCards = (
      await Recipe.findAll({
        include: [{ model: User }, { model: Comments }],
      })
    ).map((recipeCard) => recipeCard.get({ plain: true }));
    res.render("dashboard", { recipeCards, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------------------------- dashboard end

// --------------------------------------------------------------------------------- added logged in.

router.get("/add-recipe", withAuth, async (req, res) => {
  try {
    res.render("add-recipe", { logged_in: req.session.logged_in });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});
/* -----User Profile Page -----*/
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
      logged_in: req.session.logged_in,
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
          "recipe_cooking_time_hours",
          "recipe_cooking_time_minutes",
          "recipe_serves",
          "recipe_summary",
          "recipe_ingredients",
          "recipe_method",
          "recipe_image",
        ],
        include: [
          {
            model: User,
            attributes: ["username", "first_name", "last_name"],
          },
          {
            model: Comments,
            attributes: ["comment_desc", "user_id", "recipe_id", "createdAt"],
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

/* -----Edit Profile Page -----*/
router.get("/edit-profile", withAuth, async (req, res) => {
  try {
    const userFromDb = await User.findOne({
      where: { id: req.session.user_id },
    });

    const user = userFromDb.get({ plain: true });

    return res.render("profile-edit", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});
