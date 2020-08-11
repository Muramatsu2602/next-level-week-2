

// server
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

// nunjucks config
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

/*Server Config */
server
    // configurar arquivos estaticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicacao
    .get("/", pageLanding)
    .get("/give-classes", pageGiveClasses)
    .get("/study", pageStudy)

    .listen(5500)