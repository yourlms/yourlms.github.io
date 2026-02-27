const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create user
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
});

// Get users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;