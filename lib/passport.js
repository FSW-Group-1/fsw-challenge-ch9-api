const passport = require('passport')

const { Strategy: JwtStrategy, ExctractJwt } = require('passport-jwt')

const { User_account } = require('../models')

const options = {
    jwtFromRequest: ExctractJwt.fromHeader('authorization'),
    secretOrKey: 'askdjn123jblkndf932'
}

passport.use(new JwtStrategy (options, async(payload, done) => {
    return done(null, payload)
}))

module.exports = passport