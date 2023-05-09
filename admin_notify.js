const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let notificationPreferences = {};

app.get('/notifications', (req, res) => {
  res.send(`
    <form method="post" action="/notifications">
      <label for="pen">Pen:</label>
      <input type="checkbox" name="pen" id="pen" value="true"><br>
      <label for="pencil">Pencil:</label>
      <input type="checkbox" name="pencil" id="pencil" value="true"><br>
      <label for="eraser">Eraser:</label>
      <input type="checkbox" name="eraser" id="eraser" value="true"><br>
      <label for="books">Books:</label>
      <input type="checkbox" name="books" id="books" value="true"><br>
      <label for="scale">Scale:</label>
      <input type="checkbox" name="scale" id="scale" value="true"><br>
      <input type="submit" value="Save">
    </form>
  `);
});


app.post('/notifications', (req, res) => {
  notificationPreferences = req.body;
  res.send('Notification preferences saved!');
});


app.get('/notify', (req, res) => {
  const item = req.query.item;
  if (notificationPreferences[item]) {

    res.send(`Notification sent for ${item}`);
  } else {
    res.send(`No notification preferences set for ${item}`);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
