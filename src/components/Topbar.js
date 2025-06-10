import React from 'react';
import { FaBell } from 'react-icons/fa';

const Topbar = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center px-4 py-3"
        style={{
          marginLeft: '250px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 5px rgba(0, 0, 0, 0.1)', // 5px shadow
        }}
      >
        {/* Center: Head Office Button */}
        <button className="btn btn-primary">Head Office</button>

        {/* Right: Notification + User Info */}
        <div className="d-flex align-items-center gap-3 position-relative">
          {/* Notification Bell with Badge */}
          <div className="position-relative">
            <FaBell size={20} />
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span> */}
          </div>

          {/* User Info */}
          <div className="text-end">
            <small className="text-muted">Head Office</small>
            <div className="fw-bold">XXXX-XXXX</div>
          </div>

          {/* Profile Picture */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            width="35"
            height="35"
            alt="profile"
            className="rounded-circle"
          />
        </div>
      </div>

      {/* Blue line below Topbar */}
      <div
        style={{
          height: '4px',
          backgroundColor: '#0d6efd',
          width: '83%',
          marginLeft: '250px',
        }}
      ></div>
    </>
  );
};

export default Topbar;
