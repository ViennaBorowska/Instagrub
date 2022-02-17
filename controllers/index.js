const router = require("express").Router();

const userRoutes = require("./api-routes/user-routes");
const recipeRoutes = require("./api-routes/recipe-routes");
const commentRoutes = require("./api-routes/comment-routes");

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
