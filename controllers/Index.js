/**
 *  Index Controller
 * 
 * @author Grotius Cendikia Hasiholan <grotius.hasiholan@gmail.com>
 */

var fs = require('fs');
const { User_account } = require('../models')

// === Faker test ===
    var faker = require('faker');
    const users = [...Array(100)].map(user => ({
        username: faker.internet.userName(),
        password: faker.internet.password()
    }))
// ==================

module.exports = {
    all: async() => {
        //do nothing
    },
    index: async(req, res) => {
        // res.status(200).json({
        //     status: 'Connected',
        //     message: 'Ini halaman user'
        // })
        res.status(200).json(users)
    }
}