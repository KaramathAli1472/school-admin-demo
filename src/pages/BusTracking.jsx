import React, { useState } from "react";

const BusTracking = () => {
  const [busLocation, setBusLocation] = useState({ lat: "28.6139° N", long: "77.2090° E" }); // Delhi dummy

  const handleRefresh = () => {
    alert("Bus location refreshed (dummy demo)");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Bus Tracking</h1>
      <p>
        Current Bus Location: <strong>{busLocation.lat}, {busLocation.long}</strong>
      </p>
      <button onClick={handleRefresh} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Refresh Location
      </button>

      <div style={{ marginTop: "30px", height: "300px", backgroundColor: "#097bed", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>Map Demo Area</p>
      </div>
    </div>
  );
};

export default BusTracking;

