
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipename', 128).unique().notNullable()
      tbl.string('temperature', 128).notNullable()
      tbl.string('instructions', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredientname', 128).notNullable()
        })
        .createTable('recipeingredients', tbl => {
            tbl.increments();
            tbl.integer()
            .unsigned()
            tbl.string('recipeingredientname', 128).notNullable()
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            })
            .createTable('directions', tbl => {
                tbl.increments();
                tbl.integer()
                .unsigned()
                tbl.string('directionsname', 128).notNullable()
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
                })
        
    }




exports.down = function(knex) {
  
};
