const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname,'./frontend/public')));

const myLogger = (req, res, next) => {
  console.log('Something lovely this way comes');
  next();
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/views/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('CORS-Enabled web server listening at https://localhost:8080');
});

module.exports = app;
