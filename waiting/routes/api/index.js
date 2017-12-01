const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const userRoutes = require("./users");

// Restaurant routes
router.use("/restaurants", restaurantRoutes);
router.use("/users", userRoutes);

module.exports = router;
