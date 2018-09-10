const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql
const { resolver } = require('graphql-sequelize')
const { UserType }= require('./types')
const { User } = require('../models')

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: {
            type: UserType,
            args: { username: { type: GraphQLString } },
            resolve: resolver(User)
        }
   } 
})

module.exports = { RootQuery }
