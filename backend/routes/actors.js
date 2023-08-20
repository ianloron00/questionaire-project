const { Router } = require('express')
const queries = require('../queries')
const router = Router()

router.get('/', async(req, res) => {
    const query = await queries.getAllActors()
    return res.status(200).json(query)
})

router.get('/:id', async(req, res) => {
    const { id } = req.params
    const query = await queries.getActorsById(id)
    if (!query.length)
        return res.status(400).json({ message: 'actor not found' })
    return res.status(200).json(query)
})

module.exports = router