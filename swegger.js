
const autogen = require("swagger-autogen")()

const fileDocs = './swaggerOutput.json'


const routeFiles = [
    './rotas/tarefas.js'
]

const infos = {
    info: {
        title: "API de usuários",
        description: "API criada durante o curso de Sistemas de Informação",
        version: "2.0.0"
    },
    host: 'localhost:3124',
    schemes: ['http', 'https']
}

// Geração da documentação automaticamente
autogen(fileDocs, routeFiles, infos).then(() => {
    require("./index.js")
})