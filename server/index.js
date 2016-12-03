/* eslint consistent-return:0 */

const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const frontendMiddleware = require('./middlewares/frontendMiddleware');
const logger = require('./logger');
const apiMiddleware =  require('./middlewares/apiMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

// add api
 apiMiddleware(app, {
   databaseUrl: ""
 });

// In production we need to pass these values in instead of relying on webpack
frontendMiddleware(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var url = "mongodb://127.0.0.1:27017"; // "vps105169.vps.ovh.ca:27017/test";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', (err) => {
  logger.err(err, "Connection failed");
});
db.once('open', () => {
  // Start your app.
  app.listen(port, (err) => {
    if (err) {
      return logger.err(err.message);
    }

    // Connect to ngrok in dev mode
    if (ngrok) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return logger.err(innerErr);
        }

        logger.appStarted(port, url);
      });
    } else {
      logger.appStarted(port);
    }
  });
});
