const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('route /');
});

app.get('/app1', (req, res) => {
  res.send('route /app1!!!');
});

app.get('/app2', (req, res) => {
  res.send('route /app2!!!');
});

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`);
});
