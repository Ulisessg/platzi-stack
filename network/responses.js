function success(req, res, statusCode = 200, message = 'Success') {
  res.status(statusCode).json(message);
}

function error(req, res, statusCode = 500, message = 'Internal server error') {
  res.status(statusCode).json(message);
}

function page(req, res, statusCode = 200, page) {
  res.status(statusCode).type('html').send(page);
}

function error_page(req, res, statusCode = 200, page) {
  res.status(statusCode).type('html').send(page);
}

module.exports = { success, error, page, error_page };
