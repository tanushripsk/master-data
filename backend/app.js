const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const exEmployeeRoutes = require("./routes/exEmployeeRoutes");
const dependentRoutes = require("./routes/dependentRoutes");
const exEmpBenefitsRouter = require("./routes/exEmpBenefits");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error", err));

app.use("/api/ex-employees", exEmployeeRoutes);
app.use("/api/dependents", dependentRoutes);
app.use("/api/ex-emp-benefits", exEmpBenefitsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
