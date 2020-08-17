const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados

    proffyValue = {
        name: "Kenzo Muramatsu",
        avatar: "https://avatars2.githubusercontent.com/u/37938401?s=460&u=5c8989e9f1dda849b803d5313998a343b19bbf11&v=4",
        whatsapp: "14997865433",
        bio: "Quimica do mal. Vou ensinar a fazer coisas licitas e ilicitas utilizando os conhecimentos da natureza ao nosso redor",
    }

    classValue = {
        subject: 1,
        cost: "50",
        // o proffy id vira do banco de dados
    }

    classScheduleValues = [
        // class_id vira pelo bd apos cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffy = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectedProffys)

    // O horario que a pessoa trabalha, por exemplo, eh das 8h-18h
    // o horario do time_from (8h) precisa ser antes ou igual ao horario selecionado
    // o time_to precisa ser acima
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})