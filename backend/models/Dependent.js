const mongoose = require('mongoose');

const dependentSchema = new mongoose.Schema({
  empNo: { type: String, required: true },
  empName: { type: String, required: true },
  
  spouse: {
    name: { type: String },
    dob: { type: String },
    aadhaar: { type: String }
  },

  child: {
    name: { type: String },
    dob: { type: String },
    aadhaar: { type: String }
  },

  father: {
    name: { type: String },
    dob: { type: String },
    aadhaar: { type: String }
  },

  mother: {
    name: { type: String },
    dob: { type: String },
    aadhaar: { type: String }
  }

});

module.exports = mongoose.model('Dependent', dependentSchema);
