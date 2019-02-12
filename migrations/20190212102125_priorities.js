
exports.up = function(knex, Promise) {
  return knex.schema.createTable('priorities', (table) => {
    table.increments().primary();
    table.string('name').notNullable();
    table.integer('rank').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('priorities');
};
