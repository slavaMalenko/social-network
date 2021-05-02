import { rerenderEntireTree } from './../render'

let numberOfPosts = 2;

const state = {

    profilePage: {
        postData: [
            { id: 1, message: "Привет, сегодня я начинаю учить реакт" },
            { id: 2, message: "Сегодня я освоил архетиктуру реакта" },
        ],
        newPostText: ''
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

window.state = state;

export let addPost = () => {

    let numberOfPost = numberOfPosts + 1;

    numberOfPosts += 1;

    let newPost = {
        id: numberOfPost,
        message: state.profilePage.newPostText
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;