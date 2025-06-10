const express = require("express");
const router = express.Router();
const Dependent = require("../models/Dependent");

router.get("/", async (req, res) => {
  try {
    const dependents = await Dependent.find();
    res.json(dependents);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dependents" });
  }
});

module.exports = router;
