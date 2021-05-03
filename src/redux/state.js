const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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



    _addPost() {
        this._state.profilePage.numberOfPosts += 1;

        let newPost = {
            id: this._state.profilePage.numberOfPosts,
            message: this._state.profilePage.newPostText
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
    }
}



export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default store;
window.state = store._state;