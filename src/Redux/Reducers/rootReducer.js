import { combineReducers } from "redux";
import userReducer from "./userReducer";
import {firestoreReducer} from 'redux-firestore'
export default combineReducers({
    data : userReducer,
    firestore: firestoreReducer
    
    
})