import { rerenderEntireTree } from './../render'

const state = {

    profilePage: {
        postData: [
            { id: 2, message: "Привет, сегодня я начинаю учить реакт" },
            { id: 1, message: "Сегодня я освоил архетиктуру реакта" },
        ],
    },

    messengerPage: {
        dialoguesData: [
            { name: "Эльвина Ряпова", id: "1", message: "Как ты?" },
            { name: "Виктор Соляник", id: "2", message: "Да в универе запара" },
            { name: "Александр Нечаев", id: "3", message: "На физре будешь?" },
            { name: "Ахтем Маратов", id: "4", message: "Ты в универе был?" },
            { name: "Дмитрий Петрушин", id: "5", message: "Деньги скинул" }
        ],
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        message: postMessage
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state;