/* eslint-disable global-require */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../logger');
const stringify = require('../utils/stringify');
const router = express.Router();

var Post = require('./model/post');

module.exports = (app, config) => {
  app.use(bodyParser.json());
  app.use(config.apiPath, router);
  logger.info('register apiMiddleware on: ' + config.apiPath);

  router.get('/posts', function (req, res) {
    let originId = req.query.originId;
    if (originId) {
      logger.info('GET /api/posts/ for oringId: ' + originId);
      return Post.findOne({originId: originId})
        .then(post => {
          logger.info(JSON.stringify(post));
          res.json(post);
        })
        .catch(err => {
          logger.err(err, 'error find any posts');
          res.json(err);
        });
    }
    logger.info('GET /api/posts/');
    return Post.find()
      .then(posts => {
        logger.info(JSON.stringify(posts));
        if (posts) {
          res.json(posts);
        }
      })
      .catch(err => {
        logger.err(err, 'error find any posts');
        res.json(err);
      });
  });

  router.get('/posts/:id', function (req, res) {
    logger.info('GET /api/posts/' + req.params.id);
    let postId = req.params.id;
    return Post.findById(postId)
      .then(post => {
        logger.info(post);
        res.json(post);
      })
      .catch(err => {
        logger.err(err, 'error finding single post');
        res.json(err);
      });
  });

  router.post('/posts', function(req, res) {
    logger.info('POST /api/posts: req.body: ' + JSON.stringify(req.body));
    let post = new Post(req.body);
    return post.save()
      .then(newPost => {
        logger.info("new Post: " + newPost);
        res.json(newPost);
      })
      .catch(err => {
        logger.err(err);
        res.json(err);
      });
  });

  router.put('/posts/:id', function(req, res) {
    logger.info('PUT /api/posts/' + req.params.id + ': ' + JSON.stringify(req.body));
    return Post.findByIdAndUpdate(req.params.id, req.body)
      .then(post => {
        logger.info("updated Post: " + post);
        res.json(post);
      })
      .catch(err => {
        logger.err(err);
        res.json(err);
      });
  });

  router.get('/healthcheck', function (req, res) {
    logger.info('Request Type:' + stringify.stringify(req));
    res.json({ status: 'alive' });
  });

  return router;
};
