const { StatusEnum, OriginEnum } = require('../app/model/enums.js');

const mongoose = require('mongoose');
const logger = require('../server/logger');
var Post = require('../server/model/post');

logger.info('starting...');

mongoose.Promise = require('bluebird');

var url = "mongodb://127.0.0.1:27017"; // "vps105169.vps.ovh.ca:27017/test";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', (err) => {
  logger.err(err, "Connection failed");
});
db.once('open', () => {
  logger.info("connected");
  runSample();
  runFind();
  logger.info("here");

  setTimeout(() => { process.exit(0); }, 1000);
});

function runSample() {
  var post = new Post({
    kind: OriginEnum.FACEBOOK_POST,
    status: StatusEnum.POSTED,
    description: {locale: "en", text: "test post"},
  });

  logger.info('saving post...');
  return post.save()
    .then(post => {
      logger.info('Post saved successfully: ' + post);
    })
    .catch(err => {
      logger.err(err);
    });
}

function runFind() {
  logger.info("running find...");
  return Post.find()
    .then(posts=> {
      logger.info(posts);
    })
    .catch(err => {
        logger.err(err);
    });
}

logger.info('...done');
