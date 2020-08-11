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

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber -1
    return subjects[arrayPosition]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}