const db = require('mongoose');

const URI = process.env.URI;

db.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw new Error(err);
  console.log('[DB] Connected');
});

async function add_document(document) {
  try {
    await document.save();
    return 'Document saved';
  } catch (error) {
    return error;
  }
}

module.exports = { add_document };
