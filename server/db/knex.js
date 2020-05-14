const environment = process.env.NODE_ENV || 'development';

// pull the file and get the current property that is the development
const config = require('../knexfile')[environment];

module.exports = require('knex')(config);
