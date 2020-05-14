// recipe Table info
// id 
// name : text
// cook_time : text (optional)
// level : text (easy, medium, hard)
// url : text

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', (table) =>{
      table.increments();
      table.text('name').notNullable();
      table.text('cook_time');
      table.text('level').notNullable();
      table.text('url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe')
};
