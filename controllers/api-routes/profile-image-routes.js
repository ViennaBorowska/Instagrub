const router = require("express").Router();
const multer = require("multer");
const { User, Recipe } = require("../../models");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("profile-file"), async (req, res) => {
  /*console.log(JSON.stringify(req.file));
  const response = '<a href="/">Home</a><br>';
  response += "Files uploaded successfully.<br>";
  response += `<img src="${req.file.path}" /><br>`;
  return res.send(response);*/
  try {
    const updateUser = await User.update(
      { user_image: req.file.originalname },
      { where: { id: req.body.userId } }
      //{ where: { id: req.session.userid } }
    );

    const userFromDb = await User.findByPk(req.body.userId, {
      include: [
        {
          model: Recipe,
          attributes: ["id", "recipe_title"],
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

module.exports = router;
