const mongoose = require("mongoose");
const xlsx = require("xlsx");
const ExEmpBenefit = require("./models/ExEmpBenefit");
require("dotenv").config();

async function importBenefitData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const workbook = xlsx.readFile("./EX_EMP_BENEFITS.XLSX");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    const mapped = jsonData
      .filter(item => item["Amount"] !== undefined && item["Amount"] !== null)
      .map(item => ({
        unitMine: item["Unit/ Mine"],
        employeeNumber: item["Employee Number"],
        employeeName: item["Employee Name"],
        duesAfterSeparation: item["Dues after seperation"],
        amount: Number(item["Amount"]),
        settlementDate: item["Settlement Date"] ? new Date(item["Settlement Date"]) : null,
        modeOfTransaction: item["Mode of transaction"] || null,
        chequeOrTransactionNumber: item["Cheque/Transaction number"] || null,
        status: item["Status"],
        remarks: item["Remarks"] || null
      }));

    if (mapped.length === 0) {
      console.log("No valid records found to import.");
    } else {
      await ExEmpBenefit.insertMany(mapped);
      console.log(`✅ Imported ${mapped.length} records successfully.`);
    }

    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error importing data:", err.message);
    mongoose.disconnect();
  }
}

importBenefitData();
