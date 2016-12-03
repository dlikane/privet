/* eslint-disable global-require */
const express = require('express');
const logger = require('../logger');
const stringify = require('../utils/stringify');

module.exports = (app, options) => {
  logger.info('register apiMiddleware:');

  app.use('/api', function (req, res) {
    logger.info('Request Type:' + stringify.stringify(req));
    json = JSON.parse(stringify.stringify(req));
    res.json({ message: 'welcome to our api!', req: json });
  });

  return app;
};
