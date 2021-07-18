const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 3');
});

app.get('/test', (req, res) => {
  res.send(`envs ${JSON.stringify(process.env)}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
