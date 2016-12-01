/*...*/
const mongoose = require('mongoose');
const logger = require('../logger');

module.exports = (connectionUrl) => {
  mongoose.connect(connectionUrl || 'mongodb://127.0.0.1:27017/prive', (err, database) => {
    if (err) return logger.error(err);
    return database;
  });
}
