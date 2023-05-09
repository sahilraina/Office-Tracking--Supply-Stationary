import React, { useState } from "react";
import axios from "axios";

function App() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderName, setOrderName] = useState("");
  const [pickupLocation, setPickupLocation] = useState(null);

  const handleOrderNumberChange = (event) => {
    setOrderNumber(event.target.value);
  };

  const handleOrderNameChange = (event) => {
    setOrderName(event.target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    // submit order trackingdata.sql to the backend API
    axios.get(`/api/pickupLocation?orderNumber=${orderNumber}&orderName=${orderName}`).then((response) => {
      setPickupLocation(response.data);
    });
  };

  return (
    <div>
      <h1>Get Pickup Location</h1>
      <form onSubmit={handleRequestSubmit}>
        <label>
          Order Number:
          <input type="text" value={orderNumber} onChange={handleOrderNumberChange} />
        </label>
        <br />
        <label>
          Order Name:
          <input type="text" value={orderName} onChange={handleOrderNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {pickupLocation && (
        <div>
          <h2>Pickup Location Details</h2>
          <p>Location Name: {pickupLocation.locationName}</p>
          <p>Address: {pickupLocation.address}</p>
          <p>Cabinet Name: {pickupLocation.cabinetName}</p>
        </div>
      )}
    </div>
  );
}

export default App;