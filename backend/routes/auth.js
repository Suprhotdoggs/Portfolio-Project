const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const verified = require("../guard");

// Register a user
router.post("/register", userControllers.registerUser);
// Login user
router.post("/login", userControllers.loginUser);

router.get("/verify", verified.authenticateUser, (req, res) => {
  res.status(200).json({
    message: "Token is valid",
    user: req.user,
  });
});

module.exports = router;
