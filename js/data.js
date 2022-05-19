const keyIndicators = [{
    id: 0,
    name: 'Всего инцидентов',
    total: 1576,
    dinamic: '+16',
    triangle: '&#9650;',
}, {
    id: 1,
    name: 'Высокая важность',
    total: 157,
    dinamic: '+8',
    triangle: '&#9650;',
    color: '#ee3461',
}, {
    id: 2,
    name: 'Средняя важность',
    total: 253,
    dinamic: '+3',
    triangle: '&#9650;',
    color: '#f1ae00',
}, {
    id: 3,
    name: 'Всего связей',
    total: 88,
    dinamic: '+2',
    triangle: '&#9650;',
}, {
    id: 4,
    name: 'Исходящий трафик',
    total: 653,
    dinamic: '-8',
    triangle: '&#9660;',
}, {
    id: 5,
    name: 'Входящий трафик',
    total: 476,
    dinamic: '+16',
    triangle: '&#9650;',
}];

const tableIncidents = [{
    name: 'Андрей Иванов',
    resultOne: 50,
    resultTwo: 18,
    resultThree: 31
}, {
    name: 'Михаил Вешкин',
    resultOne: 47,
    resultTwo: 24,
    resultThree: 0
}, {
    name: 'Семен Измайлов',
    resultOne: 32,
    resultTwo: 0,
    resultThree: 12
}, {
    name: 'Николай Островский',
    resultOne: 11,
    resultTwo: 7,
    resultThree: 0
}, {
    name: 'Константин Константинопольский',
    resultOne: 0,
    resultTwo: 0,
    resultThree: 8
}, {
    name: 'Александр Овчиников',
    resultOne: 0,
    resultTwo: 13,
    resultThree: 7
}];

const tableCategories = [{
    name: "Поисковики",
    total: "1 257",
    triangle: '&#9650;',
    dynamics: "+3",
}, {
    name: "Новостные порталы",
    total: "1 129",
    triangle: "&#9660;",
    dynamics: "-2.1",
}, {
    name: "Развлекательные",
    total: "987",
    triangle: '&#9650;',
    dynamics: "+7",
}, {
    name: "Категория с длинным названием, которое обрезается по ширине",
    total: "596",
    triangle: '&#9660;',
    dynamics: "-3",
}, {
    name: "Игры",
    total: "431",
    triangle: '&#9650;',
    dynamics: "+1",
}, {
    name: "Форумы",
    total: "147",
    triangle: '&#9650;',
    dynamics: "+2",
}]

const tableDiscipline = [{
    date: '20.04',
    coming: '08:07',
    leave: '16:55',
    workingTime: '07:48',
}, {
    date: '19.04',
    coming: '07:56',
    leave: '16:56',
    workingTime: '08:00',
}, {
    date: '18.04',
    coming: '09:30',
    leave: '18:30',
    workingTime: '08:00',
}, {
    date: '17.04',
    coming: '08:47',
    leave: '17:47',
    workingTime: '08:00',
}, {
    date: '16.04',
    coming: '08:12',
    leave: '16:55',
    workingTime: '07:43',
}, {
    date: '15.04',
    coming: '08:00',
    leave: '16:57',
    workingTime: '07:57',
}, ]


export {
    keyIndicators,
    tableIncidents,
    tableCategories,
    tableDiscipline
}