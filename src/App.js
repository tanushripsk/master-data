import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      
      <EmployeeTable />
    </div>
  );
}

export default App;
