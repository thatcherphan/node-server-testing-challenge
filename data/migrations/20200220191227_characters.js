
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('characters', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.integer('age');
        tbl.string('species', 256)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters');
};
