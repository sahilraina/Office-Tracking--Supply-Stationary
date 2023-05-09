const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sql = require('mssql');

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Sateesh',
    password: 'Sateesh',
    database: 'Stationary'
  });

app.get('/orders/:productId', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`
      SELECT orders.orderDate, orders.quantity, products.name AS productName
      FROM orders
      INNER JOIN products ON orders.productId = products.id
      WHERE orders.productId = ${req.params.productId}
      ORDER BY orders.orderDate DESC
    `;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  } finally {
    sql.close();
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
