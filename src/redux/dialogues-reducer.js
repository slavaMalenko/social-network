let initialState = {
    dialoguesData: [
        { name: "Эльвина Ряпова", id: "1", message: "Как ты?" },
        { name: "Виктор Соляник", id: "2", message: "Да в универе запара" },
        { name: "Александр Нечаев", id: "3", message: "На физре будешь?" },
        { name: "Ахтем Маратов", id: "4", message: "Ты в универе был?" },
    ],
}

export const dialoguesReducer = (state = initialState, action) => {
    return state
}

export default dialoguesReducer;