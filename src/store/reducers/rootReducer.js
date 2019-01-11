import authReducer from "./authReducer";
import workorderReducer from "./workorderReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import accountReducer from "./accountReducer";
import contactReducer from "./contactReducer";

export default combineReducers({
  auth: authReducer,
  workorder: workorderReducer,
  account: accountReducer,
  contact: contactReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
