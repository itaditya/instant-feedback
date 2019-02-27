exports.up = async (knex, Promise) => {
  await knex.schema.createTable('ministries', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.text('description');
    table.string('hashtag').notNullable().unique();
    table.string('twitter_handle').notNullable().unique();
    table.timestamps();
  });

  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('mobile_no').notNullable().unique();
    table.integer('ministry_id');
    table.foreign('ministry_id').references('id').inTable('ministries');
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  const p1 = knex.schema.dropTable('users');
  const p2 = knex.schema.dropTable('ministries');
  return Promise.all([p1, p2]);
};
