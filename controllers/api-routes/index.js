const router = require("express").Router();

const userRoutes = require("./user-routes");
const recipeRoutes = require("./recipe-routes");
const commentRoutes = require("./comment-routes");
const profileImageRoutes = require("./profile-image-routes");

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/comments", commentRoutes);
router.use("/profile-image", profileImageRoutes);

module.exports = router;
