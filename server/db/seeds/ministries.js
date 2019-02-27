exports.seed = async (knex, Promise) => {
  await knex('ministries').del();
  return knex('ministries').insert([
    {
      name: 'Health & Nutrition',
      description: 'department for health & nutrition',
      hashtag: 'health_nut',
      twitter_handle: 'health_nut'
    }, {
      name: 'Computer Science',
      description: 'department for computer science',
      hashtag: 'cs',
      twitter_handle: 'cs'
    }
  ]);
};
