const express = require("express");
const router = express.Router();
const ExEmpBenefit = require("../models/ExEmpBenefit");

// GET all benefits
router.get("/", async (req, res) => {
  try {
    const benefits = await ExEmpBenefit.find();
    res.json(benefits);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch employee benefits" });
  }
});
module.exports = router;