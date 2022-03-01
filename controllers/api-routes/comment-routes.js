const router = require("express").Router();
const { Comments } = require("../../models");

// router.get("/", async (req, res) => {
//   try {
//     const comments = await Comments.findAll();
//     res.json(comments);
//   } catch (err) {
//     res.sendStatus(500).send(err);
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newComment = await Comments.create({
      comment_desc: req.body.comment_desc,
      user_id: req.session.user_id,
      recipe_id: req.body.recipe_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delComment = await Comments.destroy({ where: { id: req.params.id } });
    res.status(200).json(delComment);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateComment = await Comments.update(
      { comment_desc: req.body.comment_desc },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updateComment);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
