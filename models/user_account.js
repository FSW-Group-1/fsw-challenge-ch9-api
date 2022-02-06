'use strict';
const {
  Model
} = require('sequelize');

//for encyptring password
const bcrypt = require('bcrypt');

//for jsonwebtoken
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class User_account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({ username, password }) => {
      const encryptedPassword = this.#encrypt(password)
      return this.create({username:username, password: encryptedPassword, asAdmin: false})
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username,
        asAdmin: this.asAdmin
      }
      const secret = 'askdjn123jblkndf932'
      const token = jwt.sign(payload, secret)
      return token
    }

    static authenticate = async({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } })
        if(!user) return Promise.reject('User not found!')

        const isPasswordValid = user.checkPassword(password)
        if(!isPasswordValid) return Promise.reject('Wrong password!')

        return Promise.resolve(user)
      }
      catch (error) {
        return Promise.reject(error)
      }
    }

  };
  User_account.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    asAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User_account',
  });
  return User_account;
};