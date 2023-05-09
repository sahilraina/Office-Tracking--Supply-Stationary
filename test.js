const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'SupplyRequestDB'
});

app.get('/api/supplies', (req, res) => {
    db.query('SELECT * FROM supplies', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/api/supply-requests', (req, res) => {
    db.query('SELECT sr.id, s.name, s.cabinet_location, sr.quantity, sr.pickup_time, sr.status FROM supply_requests sr JOIN supplies s ON sr.supply_id = s.id', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('/api/supply-requests', (req, res) => {
    const { supply_id, quantity, pickup_time } = req.body;
    db.query('INSERT INTO supply_requests (supply_id, quantity, pickup_time, status) VALUES (?, ?, ?, "PENDING")', [supply_id, quantity, pickup_time], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Supply request created successfully' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
