const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'heroes',
  port: 3306,
});

module.exports = connection;