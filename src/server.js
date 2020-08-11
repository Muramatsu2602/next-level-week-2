const proffys = [
    {
        name: "Kenzo Muramatsu",
        avatar: "https://avatars2.githubusercontent.com/u/37938401?s=460&u=5c8989e9f1dda849b803d5313998a343b19bbf11&v=4",
        whatsapp: "14997865433",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica", 
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Vahan Agopyan",
        avatar: "https://ugpn.org/wp-content/uploads/2019/09/Professor_Vahan_Agopyan_headshot_USP.jpg",
        whatsapp: "189973366722",
        bio: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error unde doloribus aut nam sit necessitatibus incidunt, labore autem. Ipsa nobis quia illo tenetur in nam ducimus deserunt saepe minus quae.",
        subject: "Matematica",
        cost: "200",
        weekday: [1],
        time_from: [1500],
        time_to: [1750]
    },
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educacao Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terca-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys,filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const dados = req.query
    // adicionar dados a  lista de proffys

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

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