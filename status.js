const express = require('express');
const app = express();
const PORT = 3000;

// Static files
app.use(express.static('public'));

// API endpoint to get the availability status of items
app.get('/api/status', (req, res) => {
  const items = {
    pen: true,
    pencil: false,
    eraser: true,
    scale: true,
    rubber: false
  };
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
