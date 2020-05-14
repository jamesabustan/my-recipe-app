const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

/* Router mounted on localhost 3000/recipe */
/* Get requests to pass through all handlebars*/
router.get('/', function(req, res, next) {
  knex('recipe')
  .select()
  .then(recipes =>{
    res.render('all', { recipes });
  });
});

/* Get requests to add new recipe*/
/* create new view file in hbs to render*/
router.get('/new', function(req, res, next) {
  res.render('new');
});







module.exports = router;
