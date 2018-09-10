const { to, TE } = require('../../common/helper') 
const { User } = require('../models')

/**
 * function to create a user
 * @param {Object} payload the payload contains all the user attributes 
 */
async function create(payload) {
    let err, user 
    [ err, user ] = await to (User.create({
        email: payload.email,
        firstname: payload.firstname,
        lastname: payload.lastname,
        username: payload.username,
        password: payload.password
    }    
    ))
    return new Promise((resolve,reject)=>{
        if (!user) reject('User not Created') 
        else resolve(user)
    })
    
}

async function login( email, password ) {
    console.log(email,password)
    if  (!email || !password ) {
        TE('fields not sent')
    }
    let err, user
    [err, user] = await to(User.findOne({where: {email: email}}))
    let pass
    pass = await user.checkPassword(password)
    let token 
    if ( pass ){
        
        token = "Bearer " + user.tokenize()    
    }
    return new Promise ( (resolve,reject)=> {
        if(token)
        resolve (token)
        else reject('err')
    })
}

module.exports = {
    create,
    login 
}