import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Total Students", value: 120, path: "/students", color: "#4caf50" },
    { title: "Attendance Today", value: 110, path: "/attendance", color: "#2196f3" },
    { title: "Homework Pending", value: 5, path: "/homework", color: "#ff9800" },
    { title: "Fees Due", value: 12, path: "/fees", color: "#f44336" },
    { title: "Notices", value: 3, path: "/notices", color: "#9c27b0" },
    { title: "Upload Homework", value: 2, path: "/homework-upload", color: "#ff5722" },
    { title: "Bus Tracking", value: 1, path: "/bus-tracking", color: "#607d8b" },
    { title: "Chat", value: 2, path: "/chat", color: "#795548" },
  ];

  const cardStyle = (bg) => ({
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: bg,
    color: "#fff",
    textAlign: "center",
    flex: "1 1 150px",
    margin: "10px",
    minWidth: "150px",
    cursor: "pointer",
    transition: "transform 0.2s",
  });

  // Dummy data for charts
  const attendanceData = [
    { date: "01 Dec", present: 120, absent: 10 },
    { date: "02 Dec", present: 118, absent: 12 },
    { date: "03 Dec", present: 122, absent: 8 },
    { date: "04 Dec", present: 119, absent: 11 },
  ];

  const feesData = [
    { month: "Jan", collected: 48000, due: 5000 },
    { month: "Feb", collected: 50000, due: 2000 },
    { month: "Mar", collected: 47000, due: 3000 },
    { month: "Apr", collected: 51000, due: 1000 },
  ];

  const homeworkData = [
    { subject: "Math", pending: 2, completed: 8 },
    { subject: "English", pending: 1, completed: 9 },
    { subject: "Science", pending: 3, completed: 7 },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to School Management Panel</p>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "30px",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            style={cardStyle(c.color)}
            onClick={() => navigate(c.path)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ margin: "0", fontSize: "24px" }}>{c.value}</h2>
            <p>{c.title}</p>
          </div>
        ))}
      </div>

      {/* Attendance Chart */}
      <div style={{ marginTop: "50px" }}>
        <h2>Attendance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="present" stroke="#4caf50" />
            <Line type="monotone" dataKey="absent" stroke="#f44336" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Fees Chart */}
      <div style={{ marginTop: "50px" }}>
        <h2>Fees Collection</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={feesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="collected" stroke="#2196f3" />
            <Line type="monotone" dataKey="due" stroke="#f44336" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Homework Chart */}
      <div style={{ marginTop: "50px" }}>
        <h2>Homework Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={homeworkData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="completed" stroke="#4caf50" />
            <Line type="monotone" dataKey="pending" stroke="#ff9800" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

