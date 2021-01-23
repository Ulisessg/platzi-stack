//@ts-check

// Modules
const dotenv = require('dotenv').config();
const { join } = require('path');

// App and middlewares
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Serve static files
app.use(
  express.static(join(__dirname, 'static'), {
    extensions: ['html', 'htm'],
  }),
);

//  Routes
const info_route = require('./api/info/network');

app.use('/', info_route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
