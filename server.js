const express = require('express');
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

const app = express();
app.use(jsonParser);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/numTries', (req, res) => {
  return res.json(42);
});

app.listen(8080, () => {
  console.log('Listening on PORT 8080');
});
