exports.seed = async (knex, Promise) => {
  await knex('tweets').del();
  return knex('tweets').insert([
    {
      tweet: 'Tweet 1',
      sentiment_score: 0.6,
      hashtags: ['navbharat', 'awesome_policy'],
      scheme_id: 1
    }, {
      tweet: 'Tweet 2',
      sentiment_score: 0.2,
      hashtags: ['ladki_padhao'],
      scheme_id: 2
    }, {
      tweet: 'Tweet 3',
      sentiment_score: 0.8,
      hashtags: ['ladki_padhao'],
      scheme_id: 2
    }, {
      tweet: 'Tweet 4',
      sentiment_score: 0.5,
      hashtags: ['swachindia', 'no_use', 'not_important'],
      scheme_id: 3
    }
  ]);
};
