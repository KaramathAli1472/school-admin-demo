import React from "react";

const Students = () => {
  // Dummy student data
  const students = [
    { id: 1, name: "Ali Khan", rollNo: "001", class: "1-A" },
    { id: 2, name: "Ayesha Fatima", rollNo: "002", class: "1-A" },
    { id: 3, name: "Ahmed Raza", rollNo: "003", class: "1-B" },
    { id: 4, name: "Sara Khan", rollNo: "004", class: "1-B" },
  ];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Students List</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Roll No</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td style={thTdStyle}>{s.rollNo}</td>
              <td style={thTdStyle}>{s.name}</td>
              <td style={thTdStyle}>{s.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;

