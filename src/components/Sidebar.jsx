import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // mobile par default band

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Students", path: "/students" },
    { name: "Attendance", path: "/attendance" },
    { name: "Homework", path: "/homework" },
    { name: "Fees", path: "/fees" },
    { name: "Notices", path: "/notices" },
    { name: "Upload Homework", path: "/homework-upload" },
    { name: "Bus Tracking", path: "/bus-tracking" },
    { name: "Chat", path: "/chat" },
  ];

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          zIndex: 1100,
          backgroundColor: "#2196f3",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          display: "none", // sirf mobile me dikhana hai
        }}
        className="sidebar-toggle"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Overlay background only on mobile when open */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        style={{
          width: "80px", // desktop width
          backgroundColor: "#1976d2",
          color: "#fff",
          minHeight: "100vh",
          padding: "20px",
          overflowY: "auto",
          transition: "0.3s",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1200,
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "1.2rem", textAlign: "left" }}>
          Menu
        </h2>

        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={{
              display: "block",
              padding: "5px 5px",
              marginBottom: "2px",
              borderRadius: "4px",
              textDecoration: "none",
              color: location.pathname === link.path ? "#2196f3" : "#fff",
              backgroundColor: location.pathname === link.path ? "#fff" : "transparent",
              transition: "0.2s",
              textAlign: "left",
              fontWeight: "500",
            }}
            onClick={() => setIsOpen(false)} // mobile par click ke baad close
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* CSS media query for mobile */}
      <style>
        {`
          /* Mobile styles */
          @media (max-width: 768px) {
            .sidebar-toggle {
              display: block;
            }

            .sidebar {
              width: 0;
              padding: 0;
            }

            .sidebar.open {
              width: 100vw;          /* full screen width */
              padding: 20px;
            }

            .sidebar-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0,0,0,0.4);
              opacity: 0;
              pointer-events: none;
              transition: opacity 0.3s;
              z-index: 1150;
            }

            .sidebar-overlay.show {
              opacity: 1;
              pointer-events: auto;
            }
          }

          /* Desktop styles */
          @media (min-width: 769px) {
            .sidebar-overlay {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;

