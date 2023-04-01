const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");

const router = express.Router();

router.route("/").post(createUser);
router.route("/auth").post(loginUser);

module.exports = router;
