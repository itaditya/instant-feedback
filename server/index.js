require('./config.js');
const express = require('express');
const compression = require('compression')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const twit = require('twit');

const knex = require('./db/connection');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(compression())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

const T = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
})

const stream = T.stream('statuses/filter', {
  track: '#feedbackgov'
});

stream.on('tweet', data => {
  console.log({ data });
  const { text } = data;
  const { hashtags } = data.entities;
  console.log(hashtags);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const data = await knex('users').where({
    'users.id': parseInt(id)
  }).join('ministries', { 'users.ministry_id': 'ministries.id' })
  res.send({
    message: 'success',
    data
  })
})

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
})

exports = module.exports = app;
process.on('uncaughtException', err => {
  console.log(err);
});
