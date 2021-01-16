// @ts-ignore
const express = require('express'),
  path = require('path'),
  port = process.env.PORT || 8080,
  app = express(),
  dotenv = require('dotenv');
dotenv.config();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
// @ts-ignore
app.get('/ping', function (req, res) {
  return res.send('pong');
});
// @ts-ignore
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
