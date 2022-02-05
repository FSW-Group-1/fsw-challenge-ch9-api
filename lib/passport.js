const passport = require('passport')

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const { User_account } = require('../models')

const options = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'askdjn123jblkndf932'
}

passport.use(new JwtStrategy (options, async(payload, done) => {
    return done(null, payload)
}))

module.exports = passport