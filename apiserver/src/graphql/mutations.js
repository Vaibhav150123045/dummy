const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
        GraphQLString, GraphQLNonNull } = graphql
const { UserType } = require('./types')
const { to,TE } = require('../../common/helper')
const UserService = require('../services/UserService')
const { User } = require('../models')
const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: GraphQLString,
            args: {
                firstname: {type: new GraphQLNonNull(GraphQLString)},
                lastname: { type: new GraphQLNonNull(GraphQLString)},
                username: { type: new GraphQLNonNull(GraphQLString)},
                email: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)},

            },
            resolve: async function(root, {firstname, lastname, username, email, password },req) {
                let err, user
                [err, user] = await to(UserService.create({firstname, lastname, username, email, password}))
                if (err) TE('user not created')
                let token
                token = "Bearer " + user.tokenize()
                console.log(token)
                return token 
            }
        },
        login: {
            type: GraphQLString,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function (root, { email, password }, request, context ){
                let err, token 
                [err, token] = await to (UserService.login(email, password)) 
                console.log('token: ' + token)
                return token
            } 
        },

        getCurrentUser: {
            type: UserType,
            args:{
                email: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function (root, email, context){
                console.log(context.user)
                return User.findById(context.user.id)
            }
        }
    }
})

module.exports = {
    RootMutation
}
