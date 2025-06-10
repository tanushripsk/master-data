const mongoose = require("mongoose");
const xlsx = require("xlsx");
const ExEmployee = require("./models/ExEmployee");
require("dotenv").config();

async function importData() {
  await mongoose.connect(process.env.MONGO_URI);

  const workbook = xlsx.readFile("./EX_EMP.XLSX");
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = xlsx.utils.sheet_to_json(sheet);

  const mapped = jsonData.map(item => ({
    empNo: item["Employee Number"]?.toString(),
    empName: item["Employee Name"],
    group: item["Group"],
    designation: item["Designation"],
    unit: item["Unit / Mine"],
    grd: item["Grd"]
  }));

  await ExEmployee.insertMany(mapped);
  console.log("Data imported");
  mongoose.disconnect();
}

importData();
