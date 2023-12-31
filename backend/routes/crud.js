const { Router } = require('express')
const queries = require('../controllers/queries')
const router = Router()

router.get('/', async(req, res) => {
    const query = await queries.getAllAnswers()
    return res.status(200).json(query)
})

// Em req.params estará os parâmetros passados na URL
// Neste caso, o parâmetro 'id'
router.get('/:id', async(req, res) => {
    const { id } = req.params
    const query = await queries.getAnswersById(id)
    if (query.length === 0)
        return res.status(400).json({ message: `answer with id ${id} not found` })
    return res.status(200).json(query)
})

router.post('/', async(req, res) => {
    const { sector, suggestion } = req.body
    const query = await queries.createAnswer(sector, suggestion)
    return res.status(200).json(query)
})

router.put('/:id', async(req, res) => {
    const { id } = req.params
    const { sector, suggestion } = req.body
    const query = await queries.updateAnswer(id, suggestion)
    if (query === null)
        return res.status(400).json({ message: `id ${id} not found to update` })
    return res.status(200).json(query)
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    const query = await queries.deleteAnswer(id)
    if (query === null)
        return res.status(400).json({ message: `id ${id} not found to remove` })
    res.status(200).json({ message: 'answer deleted successfully' })
})

module.exports = router