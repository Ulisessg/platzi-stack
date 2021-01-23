//@ts-check

// Modules
const dotenv = require('dotenv').config();
const { error, success } = require('../network/responses');

// App
const express = require('express');
const app = express();

app.use('/', (req, res) => {
  success(
    req,
    res,
    200,
    `<!DOCTYPE html>
<html lang="es>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
  </head>
  <body>
    <h1>Hello buddy</h1>
    <h2>Goodbye buddy</h2>
  </body>
</html>
`,
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
