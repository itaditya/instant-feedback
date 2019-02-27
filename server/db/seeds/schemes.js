exports.seed = async (knex, Promise) => {
  await knex('schemes').del();
  return knex('schemes').insert([
    {
      name: 'Navbharat Abhiyan',
      description: 'Empowering Youth',
      gov_scheme_id: 'navbharat-abhiyan',
      hashtag: 'navbharat',
      ministry_id: 1
    }, {
      name: 'Ladki Padhao',
      description: 'Educating and Empowering Girls',
      gov_scheme_id: 'ladki-padhao',
      hashtag: 'ladki_padhao',
      ministry_id: 1
    }, {
      name: 'Swach Bharat',
      description: 'Cleaning India',
      gov_scheme_id: 'swach-india',
      hashtag: 'swachindia',
      ministry_id: 2
    }
  ]);
};
