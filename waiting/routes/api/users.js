const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/restaurants"
router.route("/")
  .get(usersController.findAll)
  .put(usersController.update)
  .post(usersController.create);

// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
