const mysql = require('mysql2')
const db_config = require('./db_config')

const con = mysql.createConnection({
    host: db_config.host,
    user: db_config.user,
    password: db_config.password
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected!")
})