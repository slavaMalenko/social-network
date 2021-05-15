const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersData: [
        // { id: 1, followed: true, name: "Эльвина Ряпова", status: "время весны", location: { country: "Russia", city: "Simferopol" } },
        // { id: 2, followed: false, name: "Виктор Соляник", status: "does not exist", location: { country: "Russia", city: "Simferopol" } },
        // { id: 3, followed: false, name: "Александр Нечаев", status: "", location: { country: "Russia", city: "Simferopol" } },
        // { id: 4, followed: true, name: "Ахтем Маратов", status: "", location: { country: "Russia", city: "Simferopol" } },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, ...action.users],
            }

        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = () => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = () => ({ type: SET_USERS, users });


export default usersReducer;