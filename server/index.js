/* eslint consistent-return:0 */

const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const frontendMiddleware = require('./frontend/frontendMiddleware');
const logger = require('./logger');
const apiMiddleware =  require('./api/apiMiddleware');
const resolve = require('path').resolve;
const app = express();

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3003;

// connect database and start listener
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var url = "mongodb://127.0.0.1:27017"; // "vps105169.vps.ovh.ca:27017/test";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', (err) => {
  logger.err(err, "Connection failed");
});
db.once('open', () => {
  apiMiddleware(app, {
    apiPath: '/api',
  });

  frontendMiddleware(app, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
  });

  // Start your app.
  app.listen(port, (err) => {
    if (err) {
      return logger.err(err.message);
    }
    logger.appStarted(port);
  });
});
