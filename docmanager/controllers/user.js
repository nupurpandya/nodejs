const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    await User.create({ fullName, email, password });
    res.render("login");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).end("User Not Found");
    }
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) return res.status(400).end("Invalid Credentials");
    const token = jwt.sign(
      { userId: user._id },
      process.env.secret,
      {
        expiresIn: "1h",
      }
    );

    // Store token in cookie (HTTP only)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // only https in prod
      maxAge: 3600000, // 1 hour
    });

    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
