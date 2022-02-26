const router = require("express").Router();
const multer = require("multer");
const { User, Recipe } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.status(400).json({ message: "No user found" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(req.session.logged_in);
      console.log(userData);
      console.log("logged into session as true");

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
    console.log("logged out of session");
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const delUser = await User.destroy({ where: { id: req.params.id } });
    res.status(200).json(delUser);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.update(
      { user_bio: req.body.user_bio },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});
/*----Profile Update ----*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/updateProfile",
  upload.single("profile-file"),
  async (req, res) => {
    console.log("INSIDE");
    try {
      const updateUser = await User.update(
        {
          first_name: req.body.firstname,
          last_name: req.body.lastname,
          user_bio: req.body.userbio,
        },
        { where: { id: req.session.user_id } }
      );
      if (req.file) {
        const updateUserImage = await User.update(
          {
            user_image: req.file.originalname,
          },
          { where: { id: req.session.user_id } }
        );
      }
      /*const userFromDb = await User.findOne({
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
      });*/

      return res.redirect("/user");
    } catch (err) {
      console.log(err);
      res.sendStatus(500).send(err);
    }
  }
);

module.exports = router;
