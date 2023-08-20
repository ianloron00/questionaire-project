const actors = require('./routes/actors')
const express = require('express')
const app = express()

const PORT = 5555

app.use(express.json())

app.use('/actors', actors)

app.listen(PORT, () => {
    console.log(`Executando aplicação na porta ${PORT}`)
})