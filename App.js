import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [supplyRequests, setSupplyRequests] = useState([]);
    const [supplyId, setSupplyId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pickupTime, setPickupTime] = useState('');

    useEffect(() => {
        fetchSupplyRequests();
    }, []);

    const fetchSupplyRequests = async () => {
        const response = await axios.get('http://localhost:4000/api/supply-requests');
        setSupplyRequests(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSupplyRequest = {
            supply_id: supplyId,
            quantity,
            pickup_time: pickupTime,
        };
    };
}