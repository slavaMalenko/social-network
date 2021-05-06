import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer'

const store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Привет, сегодня я начинаю учить реакт" },
                { id: 2, message: "Сегодня я освоил архетиктуру реакта" },
            ],
            newPostText: '',
            numberOfPosts: 2,
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
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store._state;