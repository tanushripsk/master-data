const mongoose = require('mongoose');

const exEmpBenefitSchema = new mongoose.Schema({
  unitMine: {
    type: String,
    required: true
  },
  employeeNumber: {
    type: Number,
    required: true
  },
  employeeName: {
    type: String,
    required: true
  },
  duesAfterSeparation: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  settlementDate: {
    type: Date
  },
  modeOfTransaction: {
    type: String
  },
  chequeOrTransactionNumber: {
    type: String
  },
  status: {
    type: String,
    enum: ['Settled', 'In Process', 'Pending'], // You can expand this list
    required: true
  },
  remarks: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ExEmpBenefit', exEmpBenefitSchema);
