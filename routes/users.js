var express = require('express');
var router = express.Router();

// === Controller ====
  const User = require('../controllers/User')
// ===================

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User router is active');
});

router.post('/register', User.register_post)

module.exports = router;
