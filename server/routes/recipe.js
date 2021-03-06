const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

/* Router mounted on localhost 3000/recipe */
/* Get requests to pass through all handlebars*/
router.get('/', (req, res) => {
  knex('recipe')
  .select()
  .then(recipes =>{
    res.render('all', {recipes});
  });
});

/* Get requests to add new recipe*/
router.get('/new', (req, res) => {
  res.render('new');
});

/* Get requests to render single recipe ID*/
router.get('/:id', (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('recipe')
    .select()
    .where('id', id)
    .first()
    .then(recipe => {
      res.render('single', recipe);
    });
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid ID'
    })
  }
});


/* Get request to show edit page*/
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('recipe')
    .select()
    .where('id', id)
    .first()
    .then(recipe => {
      res.render('edit', recipe);
    });
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid ID'
    })
  }
});


// validation user must only be able to enter string with no white spaces, complete form
function validRecipe(recipe) {
  return typeof recipe.name == 'string' && recipe.name.trim() != '' 
  && typeof recipe.level == 'string' && typeof recipe.url == 'string';
}

/* Post requests from user's Form */
/* create validation */
router.post('/', (req, res) => {
  console.log(req.body);
  if(validRecipe (req.body)) {
    const recipe = {
      name: req.body.name,
      level: req.body.level,
      cook_time: req.body.cook_time,
      url: req.body.url
    };
    knex('recipe')
    .insert(recipe, 'id')
    .then(ids => {
      id = ids[0];
    res.redirect(`/recipe/${id}`);
    })
  } else {
    res.status(500);
    res.render('error', {message : 'Invalid recipe'})
  }
});

// PUT request to update the recipe and 
router.put('/:id', (req,res) => {
  if(validRecipe (req.body)) {
    const recipe = {
      name: req.body.name,
      level: req.body.level,
      cook_time: req.body.cook_time,
      url: req.body.url
    };
    knex('recipe')
    .where ('id', req.params.id)
    .update(recipe, 'id')
    .then(() => {
    res.redirect(`/recipe/${req.params.id}`);
    })
  } else {
    res.status(500);
    res.render('error', {message : 'Invalid recipe update'})
  }
})

// Delete a recipe after validation that recipe id exists and render /recipe page
router.delete('/:id', (req,res) => {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('recipe')
    .where('id', id)
    .del()
    .then(() => {
      res.redirect('/recipe');
    });
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid ID'
    })
  }
})

module.exports = router;
