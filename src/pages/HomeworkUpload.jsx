import React, { useState } from "react";

const HomeworkUpload = () => {
  const [homeworkList, setHomeworkList] = useState([
    { id: 1, title: "Math Chapter 1", class: "1-A", dueDate: "2025-12-15" },
    { id: 2, title: "English Essay", class: "1-B", dueDate: "2025-12-16" },
  ]);

  const handleUpload = () => {
    alert("File upload feature demo (actual upload not implemented)");
  };

  const tableStyle = { borderCollapse: "collapse", width: "100%", marginTop: "20px" };
  const thTdStyle = { border: "1px solid #ddd", padding: "8px", textAlign: "center" };

  return (
    <div style={{ padding: 40 }}>
      <h1>Homework Upload</h1>
      <button onClick={handleUpload} style={{ padding: "10px 20px", marginBottom: "20px" }}>
        Upload Homework (Photo / PDF)
      </button>
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

export default HomeworkUpload;

