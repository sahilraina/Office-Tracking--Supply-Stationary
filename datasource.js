const express = require('express');
const app = express();

const supplies = [
  { name: 'pen', available: true },
  { name: 'pencil', available: false },
  { name: 'eraser', available: true },
  { name: 'scale', available: false },
  { name: 'book', available: true }
];

app.get('/supplies', (req, res) => {
  res.json(supplies);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
