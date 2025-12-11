import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Homework from "./pages/Homework";
import Fees from "./pages/Fees";
import NoticeBoard from "./pages/NoticeBoard";
import HomeworkUpload from "./pages/HomeworkUpload";
import BusTracking from "./pages/BusTracking";
import Chat from "./pages/Chat";
import Sidebar from "./components/Sidebar";
import schoolLogo from "./assets/school-logo.png";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#2196f3",
          color: "#fff",
        }}
      >
        <img
          src={schoolLogo}
          alt="School Logo"
          style={{ height: "50px", marginRight: "10px", borderRadius: "8px" }}
        />
        <h2 style={{ margin: 0 }}>My School Admin</h2>
      </nav>

      {/* Main layout */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/homework" element={<Homework />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/homework-upload" element={<HomeworkUpload />} />
            <Route path="/bus-tracking" element={<BusTracking />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

