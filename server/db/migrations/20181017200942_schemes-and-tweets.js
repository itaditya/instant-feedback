exports.up = function(knex, Promise) {
  const p1 = knex.schema.createTable('schemes', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.text('description');
    table.string('gov_scheme_id').notNullable().unique();
    table.string('hashtag').notNullable().unique();
    table.integer('ministry_id');
    table.foreign('ministry_id').references('id').inTable('ministries');
    table.timestamps(true, true);
  });

  const p2 = knex.schema.createTable('tweets', (table) => {
    table.increments('id').primary();
    table.text('tweet').notNullable().unique();
    table.float('sentiment_score').notNullable().unique();
    table.json('hashtags').notNullable();
    table.integer('scheme_id');
    table.foreign('scheme_id').references('id').inTable('schemes');
    table.timestamps(true, true);
  });

  return Promise.all([p1, p2]);
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable('tweets');
  await knex.schema.dropTable('schemes');
};
