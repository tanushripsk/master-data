const mongoose = require("mongoose");
const XLSX = require("xlsx");
const Dependent = require("./models/Dependent");

mongoose.connect("mongodb://localhost:27017/employeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const workbook = XLSX.readFile("EX_EMP_DEPENDENTS.XLSX");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(sheet);

const dependents = [];

jsonData.forEach((row) => {
  if (row["Spouse"]) {
    dependents.push({
      empNo: String(row["Employee Number"]),
      empName: row["Employee Name"],
      spouse: row["Spouse"],         // dependent's name stored in spouse field
      relationship: "Spouse",
      dob: row["Spouse Date of Birth"],
      gender: "Female", // you can adjust this logic if needed
    });
  }

  if (row["Child"]) {
    dependents.push({
      empNo: String(row["Employee Number"]),
      empName: row["Employee Name"],
      spouse: row["Child"],          // child's name stored in spouse field as well
      relationship: "Child",
      dob: row["Child Date of Birth"],
      gender: "Not Specified",
    });
  }
});

Dependent.insertMany(dependents)
  .then(() => {
    console.log("Dependents inserted successfully.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error inserting dependents:", err);
    mongoose.disconnect();
  });
