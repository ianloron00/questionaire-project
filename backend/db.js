const mysql = require('mysql2')
const db_config = require('./db_config')

const con = mysql.createConnection({
    host: db_config.host,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected!")
})

const stakeholder = { sector: 3, suggestion: 'drink more water' }
con.query('INSERT INTO stakeholders SET?', stakeholder, 
(err, res) => {
    if (err) throw err
    console.log('Stakeholder info added successfully!')
})