const g = require('graphql');
const resolve = require('./resolve');
const personType = require('./person');

const rootQuery = new g.GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    allPersons: {
      type: new g.GraphQLList(personType),
      description: 'All persons',
      resolve: () => resolve.getAllPersons(),
    },
    person: {
      type: personType,
      description: 'A person',
      args: {
        id: {
          type: g.GraphQLInt,
          description: 'Person ID',
        },
      },
      resolve: (obj, args) => resolve.getPersonById(args.id)
    }
  }),
});

module.exports = new g.GraphQLSchema({
  query: rootQuery,
});
