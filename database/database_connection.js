const mysql      = require('mysql');

const con = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : 'Alex486808',
  database : 'nimix_database'
});

con.connect();

con.query('SELECT * FROM user', (err, rows) => {
  if (err) throw err

  console.log('usuarios: ', rows, '\n\n')
})