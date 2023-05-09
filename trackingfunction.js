import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [item, setItem] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [cabinet, setCabinet] = useState("");
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // fetch locations trackingdata.sql from the backend API
    axios.get("/api/locations").then((response) => {
      setLocations(response.data);
    });
  }, []);

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
  };

  const handleCabinetChange = (event) => {
    setCabinet(event.target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    // submit request trackingdata.sql to the backend API
    axios.post("/api/requests", {
      item,
      pickupDate,
      cabinet,
    }).then((response) => {
      setStatus(response.data.status);
    });
  };

  return (
    <div>
      <h1>Make a New Request</h1>
      <form onSubmit={handleRequestSubmit}>
        <label>
          Item:
          <input type="text" value={item} onChange={handleItemChange} />
        </label>
        <br />
        <label>
          Pickup Date:
          <input type="date" value={pickupDate} onChange={handlePickupDateChange} />
        </label>
        <br />
        <label>
          Cabinet:
          <select value={cabinet} onChange={handleCabinetChange}>
            <option value="">-- Select Cabinet --</option>
            {locations.map((location) => (
              <optgroup label={location.name} key={location.id}>
                {location.cabinets.map((cabinet) => (
                  <option value={cabinet.id} key={cabinet.id}>
                    {cabinet.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Submit Request</button>
      </form>
      {status && <p>Status: {status}</p>}
    </div>
  );
}

export default App;
