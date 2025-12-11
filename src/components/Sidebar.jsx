import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

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
    <div
      style={{
        width: isOpen ? "220px" : "0",
        backgroundColor: "#1976d2",
        color: "#fff",
        minHeight: "100vh",
        padding: isOpen ? "20px" : "0",
        overflow: "hidden",
        transition: "0.3s",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      className="sidebar"
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
            padding: "10px 15px",
            marginBottom: "5px",
            borderRadius: "4px",
            textDecoration: "none",
            color: location.pathname === link.path ? "#2196f3" : "#fff",
            backgroundColor: location.pathname === link.path ? "#fff" : "transparent",
            transition: "0.2s",
            textAlign: "left", // <-- Left aligned text
            fontWeight: "500",  // optional: make it bold
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

