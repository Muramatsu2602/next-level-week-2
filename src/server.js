const proffys = [{
        name: "Kenzo Muramatsu",
        avatar: "https://avatars2.githubusercontent.com/u/37938401?s=460&u=5c8989e9f1dda849b803d5313998a343b19bbf11&v=4",
        whatsapp: "14997865433",
        bio: "<p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões. < /p>",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Shinzo Abe",
        avatar: "https://www.kantei.go.jp/jp/content/20150101souri_2.jpg",
        whatsapp: "1499782222",
        bio: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error unde doloribus aut nam sit necessitatibus incidunt, labore autem. Ipsa nobis quia illo tenetur in nam ducimus deserunt saepe minus quae.",
        subject: "Historia",
        cost: "9999",
        weekday: [1],
        time_from: [1500],
        time_to: [1750]
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render(__dirname + "give-classes.html")
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
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(5500)