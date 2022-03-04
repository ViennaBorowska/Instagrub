const router = require("express").Router();
const { route } = require("express/lib/application");
const { User, Recipe, Comments } = require("../models");
const withAuth = require("../utils/auth");
const Sequelize = require("sequelize");
const op = Sequelize.Op;
module.exports = router;

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/feed");
    return;
  }
  res.render("login");
});

// -----------------------------

// router.get("/new-recipe", (req, res) => {
//   res.render("single-recipe-new", { logged_in: req.session.logged_in });
// });

// --------------------------------------

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/feed");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/edit-profile", { logged_in: req.session.logged_in });
    return;
  }
  res.render("signup");
});

// ----------------------------------------------------------- feed start

router.get("/feed", withAuth, async (req, res) => {
  try {
    const recipeCards = (
      await Recipe.findAll({
        include: [
          {
            model: User,
            attributes: ["username", "first_name", "last_name"],
          },

          {
            model: Comments,
            attributes: ["comment_desc", "user_id", "recipe_id", "createdAt"],
            include: { model: User, attributes: ["username", "user_image"] },
          },
        ],
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

/* -----My Profile Page -----*/
router.get("/my-profile/", withAuth, async (req, res) => {
  try {
    const userFromDb = await User.findOne({
      where: { id: req.session.user_id },
      include: [
        {
          model: Recipe,
          attributes: ["id", "recipe_title", "recipe_image", "recipe_likes"],
        },
      ],
    });

    const user = userFromDb.get({ plain: true });
    let sameUser = false;
    if (req.session.user_id) {
      sameUser = true;
    }

    return res.render("profile", {
      ...user,
      logged_in: req.session.logged_in,
      sameUser,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

/* -----User Profile Page -----*/
router.get("/user/:id", withAuth, async (req, res) => {
  try {
    const userFromDb = await User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Recipe,
          attributes: ["id", "recipe_title", "recipe_image"],
        },
      ],
    });

    const user = userFromDb.get({ plain: true });

    let sameUser = false;
    if (req.params.id == req.session.user_id) {
      sameUser = true;
    }

    return res.render("profile", {
      ...user,
      logged_in: req.session.logged_in,
      sameUser: sameUser,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

/* -----Single Recipe Page -----*/

// router.get("/recipe/:id", withAuth, async (req, res) => {
//   try {
//     const { logged_in, user } = req.session;
//     const recipeFromDb = await Recipe.findOne({
//       where: { id: req.params.id },
//       include: [
//           {
//             model: User,
//             attributes: ["id", "username", "first_name", "last_name"],
//           },

//           {
//             model: Comments,
//             attributes: ["comment_desc", "user_id", "recipe_id", "createdAt"],
//             include: { model: User, attributes: ["username", "user_image"] },
//           },
//         ],
//     });

//   const recipe = recipeFromDb.get({ plain: true });

//   const isMyRecipe = logged_in && user.id === recipe.user_id;

//     return res.render("single-recipe", {
//       ...recipe,
//       logged_in: req.session.logged_in,
//       isMyRecipe: isMyRecipe,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/recipe/:id", withAuth, async (req, res) => {
  // get logged in user info from session
  const { user_id } = req.session;
  const { id } = req.params;
  const recipeFromDB = await Recipe.findByPk(id, {
    include: [
          {
            model: User,
            attributes: ["id", "username", "first_name", "last_name"],
          },

          {
            model: Comments,
            attributes: ["comment_desc", "user_id", "recipe_id", "createdAt"],
            include: { model: User, attributes: ["username", "user_image"] },
          },
        ],
  });


  const recipe = recipeFromDB.get({ plain: true });

  const isMyRecipe = user_id === recipe.user_id;

  return res.render("single-recipe", {
      ...recipe,
      logged_in: req.session.logged_in,
      isMyRecipe: isMyRecipe,
    });
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

router.get("/edit-recipe/:id", async (req, res) => {
  try {
    const recipe = (await Recipe.findByPk(req.params.id)).get({ plain: true });
    res.render("update-recipe", {
      ...recipe,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//-----------Search by particular user -----------
// router.get("/user/:id/recipes", withAuth, async (req, res) => {
//   try {
//     const recipeCards = (
//       await Recipe.findAll({
//         where: { user_id: req.params.id },
//         include: [{ model: User }, { model: Comments }],
//       })
//     ).map((recipeCard) => recipeCard.get({ plain: true }));
//     res.render("searchresult", {
//       recipeCards,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//-----------Filter by ingredients -----------
router.get("/recipes/:tag", withAuth, async (req, res) => {
  try {
    const recipeCards = (
      await Recipe.findAll({
        where: {
          [op.or]: [
            { recipe_cuisine: { [op.like]: "%" + req.params.tag + "%" } },
          ],
        },
        include: [{ model: User }, { model: Comments }],
      })
    ).map((recipeCard) => recipeCard.get({ plain: true }));
    res.json(recipeCards);
    // res.render("dashboard", { recipeCards, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
