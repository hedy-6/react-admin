var express = require('express');
var router = express.Router();
var userList = require('../datas/user');

const validateUser = ({ email, password }) => {
  if (!email || !password) {
    throw new Error("参数无效");
  }
  for (let i = 0; i < userList.length; i++) {
    const user = userList[i];
    if (user.email === email && user.password === password) {
      return {
        status: 'OK',
        userInfo: user
      }
    } else if (user.email === email && user.password !== password) {
      return {
        status: 'fail',
        msg: '密码错误'
      }
    }
  }
  return {
    status: 'fail',
    msg: '用户不存在'
  }
}

router.post('/login', function (req, res, next) {
  const {
    email,
    password
  } = req.body;
  try {
    res.json(validateUser({ email, password }))
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

/* GET users listing. */
router.get('/info', function (req, res, next) {
  const { email, password } = req.query;
  try {
    res.json(validateUser({ email, password }))
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// router.post('/', function(req, res, next) {
//   console.log(req.body)
//   console.log(req.headers.authorization)
//   res.send('respond with a resource-post');
// });

// router.get('/:id', function(req, res, next) {
//   console.log(req.params)
//   console.log(req.query)
//   console.log(req.headers.authorization)
//   res.send('respond with a resource-get');
// });

module.exports = router;
