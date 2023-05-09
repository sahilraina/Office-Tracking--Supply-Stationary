const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const supplies = [
    { name: 'pen', inventory: 5 },
    { name: 'pencil', inventory: 0 },
    { name: 'eraser', inventory: 2 },
    { name: 'scale', inventory: 1 },
    { name: 'book', inventory: 10 }
  ];
  const filteredSupplies = supplies.filter(supply => supply.inventory > 0);
  res.end(JSON.stringify(filteredSupplies));
}).listen(8080);
