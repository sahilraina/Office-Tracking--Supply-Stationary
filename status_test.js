import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestStatus = ({ requestId }) => {
    const [requestStatus, setRequestStatus] = useState(null);

    useEffect(() => {
        fetchRequestStatus();
    }, [requestId]);

    const fetchRequestStatus = async () => {
        const response = await axios.get(`http://localhost:4000/api/supply-requests/${requestId}`);
        setRequestStatus(response.data.status);
    };

    return (
        <div>
            <h2>Request Status</h2>
            {requestStatus ? (
                <p>Status: {requestStatus}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RequestStatus;
