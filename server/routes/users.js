var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  console.log(req.headers.authorization)
  res.send('respond with a resource-post');
});

router.get('/:id', function(req, res, next) {
  console.log(req.params)
  console.log(req.query)
  console.log(req.headers.authorization)
  res.send('respond with a resource-get');
});

module.exports = router;
