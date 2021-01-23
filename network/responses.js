function success(req, res, statusCode = 200, page) {
  res.status(statusCode).type('html').send(page);
}

function error(req, res, statusCode = 500, error_page) {
  res.statusCode(statusCode).type('html').send(error_page);
}

module.exports = { success, error };
