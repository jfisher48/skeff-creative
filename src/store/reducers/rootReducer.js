import authReducer from "./authReducer";
import workorderReducer from "./workorderReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  auth: authReducer,
  workorder: workorderReducer,
  firestore: firestoreReducer
});
