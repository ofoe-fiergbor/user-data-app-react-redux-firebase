import { combineReducers } from "redux";
import userReducer from "./userReducer";
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'
import authReducer from "./authReducer";

export default combineReducers({
    data : userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth:authReducer
})