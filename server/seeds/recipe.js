// recipe Table info
// id 
// name : text
// cook_time : text (optional)
// level : text (easy, medium, hard)
// url : text

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      const recipes = [{
        name: 'Sweet & sticky wings with classic slaw',
        cook_time: '50 mins',
        level: 'Easy',
        url: 'https://www.bbcgoodfood.com/recipes/sweet-sticky-wings-classic-slaw'
      }, {
        name: 'Chocolate fudge crinkle biscuits',
        cook_time: '30 mins',
        level: 'Medium',
        url: 'https://www.bbcgoodfood.com/recipes/chocolate-fudge-crinkle-biscuits'
      }, {
        name: 'Bacon & mushroom pasta',
        cook_time: '20 mins',
        level: 'Easy',
        url: 'https://www.bbcgoodfood.com/recipes/bacon-mushroom-pasta'
      }, {
        name: 'Chicken biryani',
        cook_time: '50 mins',
        level: 'Medium',
        url: 'https://www.bbcgoodfood.com/recipes/chicken-biryani'
      }];

      return knex('recipe').insert(recipes);
    });
};
