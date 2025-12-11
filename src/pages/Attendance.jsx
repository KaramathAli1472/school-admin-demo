import React, { useState } from "react";

const Attendance = () => {
  const students = [
    { id: 1, name: "Ali Khan", rollNo: "001" },
    { id: 2, name: "Ayesha Fatima", rollNo: "002" },
    { id: 3, name: "Ahmed Raza", rollNo: "003" },
    { id: 4, name: "Sara Khan", rollNo: "004" },
  ];

  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (id, status) => {
    setAttendance({ ...attendance, [id]: status });
  };

  const tableStyle = { borderCollapse: "collapse", width: "100%", marginTop: "20px" };
  const thTdStyle = { border: "1px solid #ddd", padding: "8px", textAlign: "center" };
  const buttonStyle = {
    margin: "0 5px",
    padding: "5px 10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Attendance - Class 1</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Roll No</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            const status = attendance[s.id];
            return (
              <tr key={s.id}>
                <td style={thTdStyle}>{s.rollNo}</td>
                <td style={thTdStyle}>{s.name}</td>
                <td style={thTdStyle}>
                  <button
                    style={{
                      ...buttonStyle,
                      backgroundColor: status === "Present" ? "green" : "#ccc",
                    }}
                    onClick={() => toggleAttendance(s.id, "Present")}
                  >
                    Present
                  </button>
                  <button
                    style={{
                      ...buttonStyle,
                      backgroundColor: status === "Absent" ? "red" : "#ccc",
                    }}
                    onClick={() => toggleAttendance(s.id, "Absent")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;

