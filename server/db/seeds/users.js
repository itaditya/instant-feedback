exports.seed = async (knex, Promise) => {
  await knex('users').del();
  return knex('users').insert([
    {
      name: 'Aditya',
      email: 'adityaa803@gmail.com',
      password: 'aditya',
      'mobile_no': '9911502984',
      'ministry_id': 1
    }, {
      name: 'Danny',
      email: 'git2adi@gmail.com',
      password: 'shashi',
      'mobile_no': '1112223334',
      'ministry_id': 1
    }, {
      name: 'Ankit',
      email: 'ankitjain28may77@gmail.com',
      password: 'ankit',
      'mobile_no': '2221113334',
      'ministry_id': 2
    }
  ]);
};
