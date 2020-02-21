
exports.seed = function(knex, Promise) {
  return knex('characters').truncate()
    .then(function() {
      return knex('characters').insert([
        {name:'Thatcher', age: 19, species: "human"},
        {name:'Harry', age: 13, species: "cat"},
        {name:'Checkers', age: 5, species: "cat"},
        {name:'Bobby', age: 2, species: "cat"},
        {name:'Mimi', age: 1, species: "cat"}
      ])
    })
}
