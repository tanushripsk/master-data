const mongoose = require("mongoose");

const exEmployeeSchema = new mongoose.Schema({
  empNo: String,
  empName: String,
  group: String,
  designation: String,
  unit: String,
  grd: String
});

module.exports = mongoose.model("ExEmployee", exEmployeeSchema);
