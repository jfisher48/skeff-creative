import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
//import App from './App'
//import "typeface-roboto";
//import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from "./serviceWorker";
import indexRoutes from "./routes/indexRoutes";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const hist = createBrowserHistory();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    //fontSize: "0.875em",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  palette: {
    primary: {
      light: "#4e5262",
      main: "#212432",
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
    MuiButton: {
      root: {
        fontSize: "14px",
        fontWeight: "600"
      }
    },
    MuiTab: {
      textColorPrimary: {
        color: "#4e5262",
        "&$selected": {
          color: "#212432"
        }
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
    },
    MuiDrawer: {
      docked: {
        height: "100%"
      }
    },
    MuiInputLabel: {
      filled: {
        "&$shrink": {
          transform: "translate(14px, 6px) scale(0.75)",
          color: "rgba(0,0,0,0.35)"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "&$notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)"
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#0091ea",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)"
          }
        },
        "&$focused $notchedOutline": {
          borderColor: "#0091ea"
        }
      }
    },
    MuiTableCell: {
      head: {
        whiteSpace: "nowrap",
        backgroundColor: "black",
        color: "white",
        fontSize: "1em"
      },
      body: {
        whiteSpace: "nowrap",
        fontSize: "1em"
      }
    }
  }
  // MuiSvgIcon: {
  //   root: {
  //     fontSize: "20px"
  // }}
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      allowMultipleListeners: true,
      userProfile: "users",
      attachAuthIsReady: true
    })
  )
);

store.firebaseAuthIsReady.then(() => {
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
  //registerServiceWorker();
  serviceWorker.register();
});
