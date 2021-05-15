import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: dialoguesReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;