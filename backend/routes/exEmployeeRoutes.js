const express = require("express");
const router = express.Router();
const ExEmployee = require("../models/ExEmployee");

router.get("/", async (req, res) => {
  try {
    const employees = await ExEmployee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

module.exports = router;
