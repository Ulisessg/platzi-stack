const vacant_schema = require('./schema/vacant-schema');

module.exports = (injected_store) => {
  let store = injected_store;

  if (!store) {
    store = import('../../../store/store');
  }

  async function add_vacant(document) {
    try {
      const vacant = new vacant_schema(document);

      const response = await store.add_document(vacant);

      if (Object.keys(response.errors).length >= 1) {
        if (process.env.NODE_ENV === 'development') console.log(response);
        return 'Error creating vacant';
      } else {
        return response;
      }
    } catch (err) {
      return err;
    }
  }

  return { add_vacant };
};
