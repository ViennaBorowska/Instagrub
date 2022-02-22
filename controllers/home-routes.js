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

router.get("/:id", async (req, res) => {
  try {
    const userFromDb = await User.findByPk(req.params.id, {
      include: [
        {
          model: Recipe,
          attributes: ["id", "recipe_title"],
        },
      ],
    });
    //res.status(200).json(userFromDb);
    const user = userFromDb.get({ plain: true });

    return res.render("profile", {
      ...user,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});
