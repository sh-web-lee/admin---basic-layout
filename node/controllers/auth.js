const db = require('../connect')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res) => {
  // CHECK USER IF EXSITS
  const sql = 'SELECT * FROM auth WHERE username = ?';

  db.query(sql, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(200).json({
      code: 4,
      data: null,
      msg: 'User already exsits'
    })
    // CREATE A NEW USER
    // HASH THE password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const sql = "INSERT INTO auth(`username`, `password`) VALUE (?)"


    const values = [req.body.username, hashedPassword];
    db.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({
        code: 200,
        data: null,
        msg: 'success'
      })
    })
  })


} 

const login = (req, res) => {
  const sql = 'SELECT * FROM auth WHERE username = ?'

  db.query(sql, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length === 0) return res.status(200).json({
      code: 5,
      data: {},
      msg: 'User not found'
    })

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
    if (!checkPassword) return res.status(200).json({
      code: 4,
      data: null,
      msg: 'Wrong password or username!'
    })

    const token = jwt.sign({id: data[0].id}, 'secretkey');
    
    // const { password, ...others } = data[0];

    res.cookie("accessToken", token, {
      httpOnly: true
    }).status(200).json({
      code: 200,
      data: {
        token,
      },
      msg: 'success'
    })
  })
}

const getUserInfo = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({
    code: 401,
    msg: "Not logged in",
    data: null
  })

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(401).json({
      code: 401,
      msg: "Token is not valid!",
      data: null
    })

    const sql = 'SELECT * FROM user WHERE userId = ?'

    db.query(sql, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      const { id, ...otherInfo } = data[0]
      return res.status(200).json({
        code: 200,
        msg: 'success',
        data: otherInfo
      });
    })
  })
}


module.exports = { getUserInfo, login, register }