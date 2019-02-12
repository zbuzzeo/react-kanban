
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments().primary();
    table.string('body', 1024).notNullable();
    table.integer('priority_id').notNullable();
    table.integer('status_id').notNullable();
    table.integer('created_by').notNullable();
    table.integer('assigned_to').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
