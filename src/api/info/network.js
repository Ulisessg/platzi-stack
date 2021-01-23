const { Router } = require('express');
const {
  error,
  success,
  error_page,
  page,
} = require('../../../network/responses');
const controller = require('./index');

const routes = Router();

//  Return index page

routes.get('/', (req, res) => {
  page(
    req,
    res,
    200,
    `<!DOCTYPE html>
<html lang="es>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test /A</title>
  </head>
  <body>
    <h1>Hello buddy</h1>
    <h2>Goodbye buddy</h2>
  </body>
</html>
`,
  );
});

//  Create vacant

routes.post('/create-vacant', (req, res) => {
  const vacant = req.body;

  if (
    vacant === null ||
    vacant === undefined ||
    Object.keys(vacant).length === 0
  ) {
    error(req, res, 500, 'Error creating vacant');
  } else {
    controller
      .add_vacant(vacant)
      .then((response) => {
        if (response === 'Error creating vacant')
          error(req, res, 500, response);
        success(req, res, 201, 'Vacant created');
      })
      .catch((err) => {
        if (process.env.NODE_ENV === 'development') console.log(err);
        error(req, res, 500, 'Error creating vacant');
      });
  }
});

module.exports = routes;
