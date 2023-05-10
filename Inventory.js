const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
host: 'localhost',
user: 'Sowmya',
password: 'Sowmya',
database: 'inventory_system'
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');

});
app.get('/inventory', (req, res) => {
const query = 'SELECT * FROM inventory';
connection.query(query, (error, results) => {
if (error) {
console.error('Error retrieving inventory items:', error);
res.status(500).send('Error retrieving inventory items');
return;
}
res.json(results);
});

});
app.put('/inventory/:id', (req, res) => {
const itemId = req.params.id;
const newQuantity = req.body.quantity;
const query = 'UPDATE inventory SET quantity = ? WHERE id = ?';
connection.query(query, [newQuantity, itemId], (error, results) => {
if (error) {

console.error('Error updating inventory item quantity:', error);
res.status(500).send('Error updating inventory item quantity');
return;
}
res.json(results);
});

});

app.listen(5000, () => {

console.log('Server started on port 5000!');

});