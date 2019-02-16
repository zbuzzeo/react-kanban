
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', (table) => {
    table.string('title').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
