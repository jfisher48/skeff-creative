import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
//import App from './App'
//import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import indexRoutes from "./routes/indexRoutes";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

const hist = createBrowserHistory();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "0.875em",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    subtitle1: {
      color: "rgb(85,85,85)",
      fontSize: "1.4em",
      fontWeight: "500"
    }
  },
  palette: {
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#fff"
    },
    secondary: {
      light: "#64c1ff",
      main: "#0091ea",
      dark: "#0064b7",
      contrastText: "#fff"
    }
  },
  overrides: {
    MuiCardActions: {
      root: {
        padding: "15px"
      },
      action: {
        margin: 0
      }
    },
    MuiCardHeader: {
      root: {
        color: "#000",
        paddingRight: "40px",
        paddingLeft: "40px"
      },
      subheader: {
        float: "right"
      }
    }
  }
  // MuiSvgIcon: {
  //   root: {
  //     fontSize: "20px"
  // }}
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
