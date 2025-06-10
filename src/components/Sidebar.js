import React from 'react';
import {
  FaTachometerAlt,
  FaUserCog,
  FaUsers,
  FaVideo,
  FaFileAlt,
  FaBell,
  FaExclamationCircle,
  FaCheckCircle,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div
      className="bg-white p-3 d-flex flex-column"
      style={{
        width: '260px',
        height: '100vh',
        position: 'fixed',
        borderRight: '4px solid #0d6efd',
        overflowY: 'auto',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)', // Added 5px shadow
        zIndex: 1000,
      }}
    >
      {/* Logo and Title */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <img
          src="/OIP.jpeg"
          alt="Logo"
          width="50"
        />
        <div>
          <h5 className="mb-0 text-danger fw-bold">एक अटूट बंधन</h5>
          <p className="text-muted small mb-0">Ex-Employee Portal</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center text-dark px-2 py-2 rounded hover-bg">
            <FaTachometerAlt className="me-2" />
            Analytic Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center text-dark px-2 py-2 rounded hover-bg">
            <FaUserCog className="me-2" />
            User Management
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center text-white bg-primary px-2 py-2 rounded">
            <FaUsers className="me-2" />
            Master Data
          </a>
        </li>
        <li className="nav-item mb-2 d-flex justify-content-between align-items-center px-2 py-2 rounded hover-bg">
          <div className="d-flex align-items-center text-dark">
            <FaVideo className="me-2" />
            Videos for Approval
          </div>
          <span className="badge bg-danger">100</span>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center text-dark px-2 py-2 rounded hover-bg">
            <FaCheckCircle className="me-2" />
            Life Certificates
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center text-dark px-2 py-2 rounded hover-bg">
            <FaFileAlt className="me-2" />
            Final Settlement
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link d-flex align-items-center text-dark px-2 py-2 rounded hover-bg">
            <FaFileAlt className="me-2" />
            Circulars
          </a>
        </li>
        <li className="nav-item mb-2 d-flex justify-content-between align-items-center px-2 py-2 rounded hover-bg">
          <div className="d-flex align-items-center text-dark">
            <FaExclamationCircle className="me-2" />
            Grievance Management
          </div>
          <span className="badge bg-danger">1</span>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark px-2 py-2 rounded hover-bg">
            <FaBell className="me-2" />
            Alerts
          </a>
        </li>
      </ul>

      {/* Hover Effect Style */}
      <style jsx>{`
        .hover-bg:hover {
          background-color: #f1f1f1;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
