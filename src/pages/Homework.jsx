import React from "react";

const Homework = () => {
  const homeworkList = [
    { id: 1, title: "Math Chapter 1", class: "1-A", dueDate: "2025-12-15" },
    { id: 2, title: "English Essay", class: "1-B", dueDate: "2025-12-16" },
    { id: 3, title: "Science Project", class: "1-A", dueDate: "2025-12-18" },
  ];

  const tableStyle = { borderCollapse: "collapse", width: "100%", marginTop: "20px" };
  const thTdStyle = { border: "1px solid #ddd", padding: "8px", textAlign: "center" };

  return (
    <div style={{ padding: 40 }}>
      <h1>Homework / Assignments</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Title</th>
            <th style={thTdStyle}>Class</th>
            <th style={thTdStyle}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {homeworkList.map((hw) => (
            <tr key={hw.id}>
              <td style={thTdStyle}>{hw.title}</td>
              <td style={thTdStyle}>{hw.class}</td>
              <td style={thTdStyle}>{hw.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homework;

