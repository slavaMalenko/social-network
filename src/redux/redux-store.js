import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: dialoguesReducer
});

let store = createStore(reducers);

export default store;