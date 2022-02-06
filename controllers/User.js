/**
 *  User Controller
 * 
 *  @author Grotius Cendikia Hasiholan <grotius.hasiholan@gmail.com>
 */

 var fs = require('fs');
 const { User_account } = require('../models')

 const format = (user) => {
     const { id, username, asAdmin } = user
     return ({
         id,
         username,
         asAdmin,
         accessToken: user.generateToken()
     })
 }
 
 module.exports = {
     all: async() => {
         //do nothing
     },
     register_post: async(req, res) => {
        // res.status(200).json({
        //     msg: "register is active"
        // })

        try {
            const input = {
                username : req.body.username,
                password : req.body.password
            }
            if(input.username.length ==0 || input.password.length==0 ) {
                res.status(400).json({
                    result: 'FAILED',
                    message: 'Please fullfill all form data!'
                })
            } else {
                await User_account.register({
                    username: input.username,
                    password: input.password
                })
                    .then(() => {
                        res.status(200).json({
                            result: 'SUCCESS',
                            new_account: input.username,
                            message: 'Account has been created'
                        })
                    })
            }
        }
        catch (error) {
            res.status(400).json({
                result: 'FAILED',
                message: 'Error in creating account'
            })
        }
     },
     login_post: async(req, res) => {
         try {
            //  res.status(200).json({
            //      msg: 'login_post is activated'
            //  })
            const input = {
                username: req.body.username,
                password: req.body.password
            }
            User_account.authenticate(input)
                .then(user => {
                    res.status(200).json(format(user))
                })
         }
         catch (error) {
             res.status(400).json({
                 result: 'FAILED',
                 message: 'Error when logging in'
             })
         }
     },
     login_token_post: async(req, res) => {
        const result = {
            id: req.user.id,
            username: req.user.username,
            asAdmin: req.user.asAdmin,
            iat: req.user.iat,
            message: 'You are logged in!'
        }
        res.status(200).json(result)
     }
 }