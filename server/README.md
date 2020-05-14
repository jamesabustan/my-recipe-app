### my-recipe-app
### Recipe journal that let's you add, edit and delete your fave recipes (inputs recipe name, cooking time, level, url link)


### Tech used 
* Express.js for routes
* Handlebars.js templating language
* Knex.js Dabatabase migrations, seeds and queries
* Postgres for Database 
* Mocha Chai for testing

### Learning points
* Setting up express and connecting to Postgres Database
* Validation and error handling - using trim() to prevent user entering whitespaces on both sides
* Using Handlebars as template engine 
* Passing form data down to server and inserting it to database
* Frequent commits and working on branches
* Document after every feature is completed
* Refactor repeated functions in recipe.js route file
* Use Middleware 'method_override' to allow forms action='POST' to have functionality of edit by appending ?_method=PUT in the form ACTION tag
* Similar formats of route paths clashing and breaking when requests such as router.get(‘/:id’) overrides another route like  router.get(‘/recipe’) when navigated on the browser
* Before running tests, database needs to be dropped (if non-existant) and create so it runs from scratch

### Struggles
* Issue where form ONLY does GET and POST request and unable to PUT. Researched and found 'method-override'
* Creating validation to ensure users are inputting correct data forms
* Create Button won't connect to its assigned route. 
* Node_Env on test - to use a different database connection


### Steps Checklist
* Generate Express App
* Create database - Knex, create migration recipes
* Create seeds sample data
* Create routes
* Create DB connection - create Knex.js
* List all data with GET /recipe
* Implement Bootstrap and apply basic card styling on hbs files
* Create Form for user to input recipe data
* Display Form via HBS file for display
* Add data entry with POST /recipe 
* Pass Data from form to server to database 
* Show single recipe with GET /recipe/:id 
* Show an Edit recipe form with with GET /recipe/:id/edit
* Update recipe with PUT /recipe/:id
* Delete a recipe with DELETE /recipe/:id


### Test Checklist
* Install mocha, chai, supertest
* Add a test database connection
* Add test script
* Drop and create database
* Run migrations and seeds on test db


