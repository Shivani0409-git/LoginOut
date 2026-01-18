const express = require('express')
const signupController = ("../controllers/signup.js");
const router = express.Router();

router.post("/register", signupController.createUser);

module.exports = router;