import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
//import App from './App';
//import 'typeface-roboto';
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
       }
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
