const express = require('express');
const app = express();

const supplies = [
	{ name: 'Pen', available: true },
	{ name: 'Pencil', available: false },
	{ name: 'Eraser', available: true },
	{ name: 'Scale', available: true },
	{ name: 'Book', available: false },

];

app.get('/search', (req, res) => {
	const query = req.query.query.toLowerCase();
	const results = supplies.filter(supply => {
		const name = supply.name.toLowerCase();
		return name.includes(query);
	});

	let html = '';
	results.forEach(result => {
		const status = result.available ? 'Available' : 'Unavailable';
		html += `<div>${result.name} - ${status}</div>`;
	});

	res.send(html);
});

app.use(express.static('public'));

app.listen(3000, () => console.log('Server listening on port 3000'));
