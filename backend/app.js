const express = require('express')
const answers = require('./routes/crud')
const app = express()

const PORT = 5555

app.use(express.json())

app.use('/answers', answers)

app.listen(PORT, () => {
    console.log(`Executando aplicação na porta ${PORT}`)
})