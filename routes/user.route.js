const express = require("express");
const { registerUser, loginUser, logout, getUser} = require("../controllers/user.controller");
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/user", getUser);



module.exports = router