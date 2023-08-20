const connection = require('./db_manager/connection')
const database_name = 'sakila.actor'

const getAllActors = async () => {
    const [query] = await connection.execute(`SELECT * FROM ${database_name}`)
    return query
}

const getActorsById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM ${database_name} WHERE
    actor_id = ?`, [id])
    return query
}

const createActor = async (first_name, last_name) => {
    const [query] = await connection.execute(`INSERT INTO 
    ${database_name} (first_name, last_name) 
    VALUES (?, ?)`, [first_name, last_name])
    const new_item = await getActorsById(query.insertId)
    return new_item
}

module.exports = { 
    getAllActors, 
    getActorsById, 
    createActor 
}