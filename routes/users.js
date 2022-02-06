var express = require('express');
var router = express.Router();

// === Controller ====
  const User = require('../controllers/User')
// ===================

const restrict = require('../middlewares/restrict')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User router is active');
});

router.post('/register', User.register_post)
router.post('/login', User.login_post)

// === Token test ====
  router.post('/login-token', restrict, User.login_token_post)
// ===================

module.exports = router;
