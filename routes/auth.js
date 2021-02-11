const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { newUser, renewToken, loginUser } = require("../controllers/auth");
const { fieldValidator } = require("../middlewares/fieldValidator");

/*
    Rutas de usuarios / auth
    host + /api/auth
*/

router.post(
  "/register",
  [
    check("name", "The name is required").not().isEmpty(),
    check("email", "The email is required").isEmail(),
    check(
      "password",
      "The password is required and it must be min 6"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  newUser
);

router.post(
  "/login",
  [
    check("email", "The email is required").isEmail(),
    check(
      "password",
      "The password is required and it must be min 6"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  loginUser
);

router.get("/renew", renewToken);

module.exports = router;
