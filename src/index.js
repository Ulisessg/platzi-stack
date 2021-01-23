//@ts-check

// Modules
const dotenv = require('dotenv').config();

// App and middlewares
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes
const info_route = require('./api/info/network');

app.use('/', info_route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
