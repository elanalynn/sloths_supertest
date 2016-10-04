exports.seed = function(knex, Promise) {
  return knex('sloths').del()
    .then(function () {
      return Promise.all([
        knex('sloths').insert({id: 1, name: 'Jerry', age: 4, image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Three-toed-Sloth-photo.jpg'}),
        knex('sloths').insert({id: 2, name: 'Sally', age: 2, image: 'http://www.wildlifeextra.com/resources/listimg/world/Africa/3_toed_sloth@large.jpg'}),
        knex('sloths').insert({id: 3, name: 'Sawyer', age: 1, image: 'http://www.rainforest-alliance.org/sites/default/files/styles/responsive_breakpoints_theme_rainforest_wide_1x/public/slideshow/header/three-toed-sloth.jpg'}),
      ])
    })
}
