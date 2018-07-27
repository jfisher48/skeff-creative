import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
//import App from './App';
import 'typeface-roboto';
//import registerServiceWorker from './registerServiceWorker';
import indexRoutes from './routes/indexRoutes';

const hist = createBrowserHistory();

const theme = createMuiTheme({
    typography: {
        "fontFamily": "\"Encode Sans Condensed\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       },
    palette: {
        primary: {
            light: '#4f5b62',
            main: '#263238',
            dark: '#000a12',
            contrastText: '#fff',
        },
        secondary: {
            light: '#64c1ff',
            main: '#0091ea',
            dark: '#0064b7',
            contrastText: '#fff',
        }        
    },
    overrides: {
        // Name of the component ⚛️
        MuiTouchRipple: {
          // The properties to apply
          ripple: {
              color: 'white'
          }
          // No more ripple, on the whole application 💣!
        },
      },

});

ReactDOM.render(

    <MuiThemeProvider theme={theme}>
    <Router history={hist}>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </Router>
    </MuiThemeProvider>,
    document.getElementById('root'));
//registerServiceWorker();
