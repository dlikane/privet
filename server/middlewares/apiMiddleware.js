/* eslint-disable global-require */
const express = require('express');
const logger = require('../logger');
const stringify = require('../utils/stringify');

const dao =  require('../api/dao');

module.exports = (app, options) => {
  logger.info('register apiMiddleware:');

  // connect to db
  var db = dao(options.databaseUrl);

  app.use('/api', function (req, res) {
    logger.info('Request Type:' + stringify.stringify(req));
    json = JSON.parse(stringify.stringify(req));
    res.json({ message: 'welcome to our api!', req: json });
  });

  return app;
};
