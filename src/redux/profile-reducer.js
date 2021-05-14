const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: "Привет, сегодня я начинаю учить реакт" },
        { id: 2, message: "Сегодня я освоил архетиктуру реакта" },
    ],
    newPostText: '',
    numberOfPosts: 2,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            state.numberOfPosts += 1;
            if (state.newPostText.length > 0) {
                return {
                    ...state,
                    postData: [...state.postData, {
                        id: state.numberOfPosts,
                        message: state.newPostText
                    }],
                    newPostText: '',
                };
            } else {
                return state;
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;