const { json } = require('express')
const connection = require('./db_manager/connection')
const table_name = 'sakila.actor'

const getAllActors = async () => {
    const [query] = await connection.execute(`
        SELECT * FROM ${table_name}`)
    return query
}

const getActorsById = async (id) => {
    const [query] = await connection.execute(`
        SELECT * FROM ${table_name} 
        WHERE actor_id = ?`, [id])
    return query
}

const createActor = async (first_name, last_name) => {
    const [query] = await connection.execute(`
        INSERT INTO ${table_name} (first_name, last_name) 
        VALUES (?, ?)`, [first_name, last_name])
    const new_item = await getActorsById(query.insertId)
    return new_item
}

const updateActor = async (id, first_name, last_name) => {
    const [item] = await getActorsById(id)
    if (item.length === 0)
        return null 
    const [query] = await connection.execute(`
        UPDATE ${table_name} 
        SET first_name = ?, last_name = ?
        WHERE actor_id = ?;`, [first_name, last_name, id])
    return await getActorsById(id)
}

const deleteActor = async (id) => {
    const item = await getActorsById(id)
    if (item.length === 0)
        return null
    await connection.execute(`DELETE FROM sakila.film_actor
    WHERE actor_id = ?;`, [id])
    const [query] = await connection.execute(`
        DELETE FROM ${table_name}
        WHERE actor_id = ?;`, [id])
    return query
}

module.exports = { 
    getAllActors, 
    getActorsById, 
    createActor,
    updateActor,
    deleteActor
}