const Database = require('./database/db')

const {
    subjects,
    weekdays,
    getSubject
} = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query

    if(!filters.subject || !filters.weekday || !filters.time){
        return res.render("study.html", {
            filters,
            subjects,
            weekdays
        })
    }

    const query =  `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `

   
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    // se houver dados
    if (isNotEmpty) {

        // correct subject id with its name
        data.subject = getSubject(data.subject)

        // adicionar dados a  lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    // se nao, mostrar a pagina
    return res.render("give-classes.html", {
        subjects,
        weekdays
    })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}