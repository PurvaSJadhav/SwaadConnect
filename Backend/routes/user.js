const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

//Signup
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: "User Registered!" });
    console.log("User Registration completed...");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    res.json({ message: "Login Successful", username: user.username });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

module.exports = router;
