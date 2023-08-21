const { Router } = require('express')
const queries = require('../queries')
const router = Router()

router.get('/', async(req, res) => {
    const query = await queries.getAllActors()
    return res.status(200).json(query)
})

// Em req.params estará os parâmetros passados na URL
// Neste caso, o parâmetro 'id'
router.get('/:id', async(req, res) => {
    const { id } = req.params
    const query = await queries.getActorsById(id)
    if (query.length === 0)
        return res.status(400).json({ message: `actor with id ${id} not found` })
    return res.status(200).json(query)
})

router.post('/', async(req, res) => {
    const { first_name, last_name } = req.body
    const query = await queries.createActor(first_name, last_name)
    return res.status(200).json(query)
})

router.put('/:id', async(req, res) => {
    const { id } = req.params
    const { first_name, last_name } = req.body
    const query = await queries.updateActor(id, first_name, last_name)
    if (query === NULL)
        return res.status(400).json({ message: `id ${id} not found to update` })
    return res.status(200).json(query)
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    const query = await queries.deleteActor(id)
    if (query === null)
        return res.status(400).json({ message: `id ${id} not found to remove` })
    res.status(200).json({ message: 'actor deleted successfully' })
})

module.exports = router