import React, { useState } from "react";

const Fees = () => {
  const [feesData, setFeesData] = useState([
    { id: 1, name: "Ali Khan", class: "1-A", total: 5000, paid: 4500 },
    { id: 2, name: "Ayesha Fatima", class: "1-A", total: 5000, paid: 5000 },
    { id: 3, name: "Ahmed Raza", class: "1-B", total: 5000, paid: 4000 },
    { id: 4, name: "Sara Khan", class: "1-B", total: 5000, paid: 5000 },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [payAmount, setPayAmount] = useState("");

  const handlePayClick = (student) => {
    setSelectedStudent(student);
    setPayAmount("");
  };

  const handlePaymentSubmit = () => {
    if (!payAmount || isNaN(payAmount)) return alert("Enter a valid amount!");
    const updatedData = feesData.map((f) => {
      if (f.id === selectedStudent.id) {
        const newPaid = f.paid + Number(payAmount);
        return { ...f, paid: newPaid > f.total ? f.total : newPaid };
      }
      return f;
    });
    setFeesData(updatedData);
    setSelectedStudent(null);
  };

  const tableStyle = { borderCollapse: "collapse", width: "100%", marginTop: "20px" };
  const thTdStyle = { border: "1px solid #ddd", padding: "8px", textAlign: "center" };
  const dueStyle = { color: "red", fontWeight: "bold" };

  return (
    <div style={{ padding: 40 }}>
      <h1>Fees Management</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Class</th>
            <th style={thTdStyle}>Total</th>
            <th style={thTdStyle}>Paid</th>
            <th style={thTdStyle}>Due</th>
            <th style={thTdStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feesData.map((f) => {
            const due = f.total - f.paid;
            return (
              <tr key={f.id}>
                <td style={thTdStyle}>{f.name}</td>
                <td style={thTdStyle}>{f.class}</td>
                <td style={thTdStyle}>{f.total}</td>
                <td style={thTdStyle}>{f.paid}</td>
                <td style={{ ...thTdStyle, ...(due > 0 ? dueStyle : {}) }}>
                  {due > 0 ? due : "-"}
                </td>
                <td style={thTdStyle}>
                  {due > 0 ? (
                    <button onClick={() => handlePayClick(f)}>Pay Now</button>
                  ) : (
                    "Paid"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Payment Modal */}
      {selectedStudent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: 30,
              borderRadius: 8,
              minWidth: "300px",
            }}
          >
            <h2>Pay Fees for {selectedStudent.name}</h2>
            <p>Total: {selectedStudent.total}</p>
            <p>Paid: {selectedStudent.paid}</p>
            <p>Due: {selectedStudent.total - selectedStudent.paid}</p>

            <input
              type="number"
              placeholder="Enter amount to pay"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
            />
            <button onClick={handlePaymentSubmit} style={{ marginRight: "10px" }}>
              Submit
            </button>
            <button onClick={() => setSelectedStudent(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fees;

