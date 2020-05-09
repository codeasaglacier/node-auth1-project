
exports.up = async function(knex) {
  await knex.schema.createTable( "users", ( table ) => {
    table.increments()
    table.string( "username", 128 ).notNull().unique()
    table.string( "password", 128 ).notNull()
  } )
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists( "users" )
};
