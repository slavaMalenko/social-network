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
            {
                state.numberOfPosts += 1;
                let newPost = {
                    id: state.numberOfPosts,
                    message: state.newPostText
                };
                let stateCopy = { ...state };
                stateCopy.postData = [...state.postData];
                stateCopy.postData.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }

        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = { ...state };
                stateCopy.postData = [...state.postData];
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;