/**
 *  User Controller
 * 
 *  @author Grotius Cendikia Hasiholan <grotius.hasiholan@gmail.com>
 */

 var fs = require('fs');
 const { User_account } = require('../models')
 
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
        catch (error) {
            res.status(400).json({
                result: 'FAILED',
                message: 'Error in creating account'
            })
        }
     }
 }