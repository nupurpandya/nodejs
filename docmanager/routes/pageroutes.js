const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/userModel");
// Home page
router.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Register" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

// Logout route
router.get("/logout", (req, res) => {
  res.clearCookie("token", { path: "/" }); // clear the token cookie
  res.redirect("/login");                  // redirect to login page
});

router.get("/singledocument", (req, res) => {
  res.render("upload");
});

router.get("/dashboard", authMiddleware, async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  console.log(user);
  
  res.render("dashboard", { user });
});

module.exports = router;
