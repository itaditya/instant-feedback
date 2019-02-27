console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = require('knex')(config);
