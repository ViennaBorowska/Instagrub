const router = require("express").Router();
const { User } = require("../../models");

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

module.exports = router;
