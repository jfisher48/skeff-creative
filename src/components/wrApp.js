import React, { Component } from "react";
import App from "../App";
import { createStore } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

class wrApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default wrApp;
