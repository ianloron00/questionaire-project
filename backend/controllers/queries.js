const connection = require('../db_manager/connection')
const table_name = "stakeholders"

const getAllAnswers = async () => {
    const [query] = await connection.execute(`
    SELECT * FROM ${table_name};`)
    return query
}

const getAnswersById = async (id) => {
    const [query] = await connection.execute(`
    SELECT * FROM ${table_name}
    WHERE id = ?;`, [id])
    return query
}

const createAnswer = async (sector, suggestion) => {
    const [query] = await connection.execute(`
    INSERT INTO ${table_name} (sector, suggestion)
    VALUES (?, ?);`, [sector, suggestion])
    const item = await getAnswersById(query.insertId)
    return item
}

const updateAnswer = async (id, suggestion) => {
    const item = await getAnswersById(id)
    if (item.length === 0)
        return null
    const [query] = await connection.execute(`
    UPDATE ${table_name}
    SET suggestion = ?
    WHERE id = ?;`, [suggestion, id])
    return await getAnswersById(id)
}

const deleteAnswer = async (id) => {
    const item = await getAnswersById(id)
    if (item.length === 0)
        return null
    const [query] = await connection.execute(`
    DELETE FROM ${table_name}
    WHERE id = ?;`, [id])
    return query
}

module.exports = {
    getAllAnswers,
    getAnswersById,
    createAnswer,
    updateAnswer,
    deleteAnswer
}