// Utilizamos o arquivo 'promise' para 
// realizar buscas assíncronas
const mysql = require('mysql2/promise')
const db_config = require('./db_config')

const connection = mysql.createPool({
    host: db_config.host,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database,
    port: db_config.port
})

module.exports = connection