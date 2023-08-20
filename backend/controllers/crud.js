const connection = require('../db_manager/connection')
const asyncWrapper = require('../middleware/async')

const getAllActors = asyncWrapper(async(req, res) => {
    const [query] = await connection.execute('SELECT * FROM sakila.actor')
    return query
}) 

module.exports = { getAllActors }