// server
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// nunjucks config
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

/*Server Config */
server
    // recebe os dados do req.body
    .use(express.urlencoded({extended: true})) 
    // configurar arquivos estaticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicacao
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)

    .listen(5500)