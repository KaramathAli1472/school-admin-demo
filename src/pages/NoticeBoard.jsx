import React from "react";

const NoticeBoard = () => {
  const notices = [
    { id: 1, title: "Winter Break", date: "2025-12-20", type: "Holiday" },
    { id: 2, title: "Math Exam", date: "2025-12-15", type: "Exam" },
    { id: 3, title: "Annual Day Event", date: "2025-12-18", type: "Event" },
  ];

  const tableStyle = { borderCollapse: "collapse", width: "100%", marginTop: "20px" };
  const thTdStyle = { border: "1px solid #ddd", padding: "8px", textAlign: "center" };

  return (
    <div style={{ padding: 40 }}>
      <h1>Notice Board</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Title</th>
            <th style={thTdStyle}>Date</th>
            <th style={thTdStyle}>Type</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((n) => (
            <tr key={n.id}>
              <td style={thTdStyle}>{n.title}</td>
              <td style={thTdStyle}>{n.date}</td>
              <td style={thTdStyle}>{n.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeBoard;

