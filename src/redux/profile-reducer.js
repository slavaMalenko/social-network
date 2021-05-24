const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postData: [
        { id: 1, message: "Привет, сегодня я начинаю учить реакт" },
        { id: 2, message: "Сегодня я освоил архетиктуру реакта" },
    ],
    newPostText: '',
    numberOfPosts: 2,
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            if (state.newPostText.length > 0) {
                state.numberOfPosts += 1;
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

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;