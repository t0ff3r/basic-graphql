const g = require('graphql');
const resolve = require('./resolve');

const Person = new g.GraphQLObjectType({
  name: 'Person',
  description: 'A person',
  fields: () => ({
    id: {
      type: g.GraphQLInt,
      description: 'Person ID',
    },
    name: {
      type: g.GraphQLString,
      description: 'Person name',
    },
    age: {
      type: g.GraphQLInt,
      description: 'Person age',
    },
    relative: {
      type: new g.GraphQLList(Person),
      description: 'Person relatives',
      resolve: (person) => person.relative.map(resolve.getPersonById),
    },
    github: {
      type: g.GraphQLString,
      description: 'Person github page',
      resolve: (person) => `http://github.com/${person.name}`,
    }
  }),
});

module.exports = Person;
