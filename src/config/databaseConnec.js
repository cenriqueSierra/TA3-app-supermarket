const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: "localhost",
    user:'carlos',
    password: 'carlosSql',
    database:'store',
  });
  }