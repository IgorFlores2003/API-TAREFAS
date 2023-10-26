const express = require('express')
const rotasPadrao = require('./rotas/index.js')
const rotasTarefa = require('./rotas/tarefa.js')
const app = express()
require('dotenv').config()
// Importação do Express
const express = require("express")
// Definição da porta
const porta = process.env.PORTA

// IMportação dos arquivos do swagger
const swaggerui = require('swagger-ui-express')
const swaggerFile = require('./swaggerOutput.json')

// importamos o componente middleware
const registrarLogMiddleware = require('./middlewares/registrarLogMiddleware')

app.use(express.json())
app.use(rotasPadrao)
app.use(rotasTarefa)
app.use('/docs', swaggerui.serve)
app.get('/docs', swaggerui.setup(swaggerFile))

app.listen(3000, () => {
    console.log("API está viva!")
})