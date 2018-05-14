const graphql = require("graphql")
const _ = require("lodash")

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootqueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, {id: args.id })
      }
    }
  }
})

const users = [
  { id: '23', firstName: 'John', age: '30'},
  { id: '20', firstName: 'Jooe', age: '40'}
]

module.exports = new GraphQLSchema({
  query: RootQuery
})