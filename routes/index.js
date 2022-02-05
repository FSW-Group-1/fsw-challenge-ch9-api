var express = require('express');
var router = express.Router();

const Index = require('../controllers/Index')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Hello World' });
  res.status(200).json({
    status: 'Connected',
    message: 'Hello world! :D. Go to `/docs` to see the API Documentaions',
  })
});

router.get('/faker-test', Index.index)

module.exports = router;
