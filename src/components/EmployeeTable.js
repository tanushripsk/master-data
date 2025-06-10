import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("ex-employee");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === "ex-employee") {
          const res = await axios.get("http://localhost:5000/api/ex-employees");
          setData(res.data);
        } else if (activeTab === "dependents") {
          const res = await axios.get("http://localhost:5000/api/dependents");
          setData(res.data);
        } else if (activeTab === "benefits") {
          const res = await axios.get("http://localhost:5000/api/ex-emp-benefits");
          setData(res.data);
        }
      } catch (err) {
        console.error("API fetch error:", err);
      }
    };

    fetchData();
  }, [activeTab]);

  // Filter data based on search input
  const filteredData = data.filter((item) => {
    const values = Object.values(item || {}).join(" ").toLowerCase();
    return values.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="p-4" style={{ marginLeft: "250px" }}>
      {/* Tabs */}
      <div className="d-flex mb-3 gap-2">
        <button
          className={`btn ${
            activeTab === "ex-employee" ? "btn-primary" : "btn-light"
          }`}
          onClick={() => setActiveTab("ex-employee")}
        >
          Ex employee Master
        </button>
        <button
          className={`btn ${
            activeTab === "dependents" ? "btn-primary" : "btn-light"
          }`}
          onClick={() => setActiveTab("dependents")}
        >
          Dependents Master
        </button>
        <button
          className={`btn ${
            activeTab === "benefits" ? "btn-primary" : "btn-light"
          }`}
          onClick={() => setActiveTab("benefits")}
        >
          Benefits plan Master
        </button>
      </div>

      {/* Search */}
      <input
        className="form-control w-50 mb-3"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Ex-Employee Table */}
      {activeTab === "ex-employee" && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-primary">
              <tr>
                <th>Sr.No</th>
                <th>Emp. No.</th>
                <th>Employee Name</th>
                <th>Group</th>
                <th>Designation</th>
                <th>Unit / Mine</th>
                <th>Grd</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={item._id || i}>
                  <td>{String(i + 1).padStart(2, "0")}</td>
                  <td>{item.empNo}</td>
                  <td>{item.empName}</td>
                  <td>{item.group}</td>
                  <td>{item.designation}</td>
                  <td>{item.unit}</td>
                  <td>{item.grd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Dependents Table */}
      {activeTab === "dependents" && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-primary">
              <tr>
                <th>Emp. No.</th>
                <th>Employee Name</th>
                <th>Spouse</th>
                <th>Spouse DOB </th>
                <th>Spouse Adhar</th>
                <th>Child</th>
                <th>Child DOB </th>
                <th>Child Adhar</th>
                <th>Father</th>
                <th>Father DOB </th>
                <th>Father Adhar</th>
                <th>Mother</th>
                <th>Mother DOB </th>
                <th>Mother Adhar</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={item._id || i}>
                  <td>{item.empNo}</td>
                  <td>{item.empName}</td>
                  <td>{item.spouse}</td>
                  <td>{item["spouse dob"]}</td>
                  <td>{item["spouse adhar"]}</td>
                  <td>{item.child}</td>
                  <td>{item["child dob"]}</td>
                  <td>{item["child adhar"]}</td>
                  <td>{item.father}</td>
                  <td>{item["father dob"]}</td>
                  <td>{item["father adhar"]}</td>
                  <td>{item.mother}</td>
                  <td>{item["mother dob"]}</td>
                  <td>{item["mother adhar"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Benefits Table */}
      {activeTab === "benefits" && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-primary">
              <tr>
                <th>Sr.No</th>
                <th>Unit / Mine</th>
                <th>Employee Number</th>
                <th>Employee Name</th>
                <th>Dues After Separation</th>
                <th>Amount</th>
                <th>Settlement Date</th>
                <th>Mode of Transaction</th>
                <th>Cheque / Transaction Number</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={item._id || i}>
                  <td>{String(i + 1).padStart(2, "0")}</td>
                  <td>{item.unitMine}</td>
                  <td>{item.employeeNumber}</td>
                  <td>{item.employeeName}</td>
                  <td>{item.duesAfterSeparation}</td>
                  <td>{item.amount}</td>
                  <td>{new Date(item.settlementDate).toLocaleDateString()}</td>
                  <td>{item.modeOfTransaction}</td>
                  <td>{item.chequeOrTransactionNumber}</td>
                  <td>{item.status}</td>
                  <td>{item.remarks || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Placeholder */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-outline-secondary" disabled>
          First
        </button>
        <div>
          <button className="btn btn-outline-secondary me-2">&lt;</button>
          <span>1 of 100</span>
          <button className="btn btn-outline-secondary ms-2">&gt;</button>
        </div>
        <button className="btn btn-outline-secondary">Last</button>
      </div>
    </div>
  );
};

export default EmployeeTable;
