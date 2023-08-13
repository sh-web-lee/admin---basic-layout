const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  password: 'lee-malachi1998',
  user: 'root',
  database: 'yoga'
})

module.exports = db;