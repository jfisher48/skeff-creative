import authReducer from "./authReducer";
import workorderReducer from "./workorderReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducer,
  workorder: workorderReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
