const { signup, login, logout } = require("../Controllers/AuthController");

const { userVerication } = require("../Middlewares/AuthMiddleware");
const express = require("express");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/", userVerication);

module.exports = router;
