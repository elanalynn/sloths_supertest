exports.up = function(knex) {
  return knex.schema.createTable('sloths', (table) => {
    table.increments()
    table.string('name')
    table.integer('age')
    table.string('image')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('sloths')
}
