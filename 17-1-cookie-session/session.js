//=== session ===

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('session');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
