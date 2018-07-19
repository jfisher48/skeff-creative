import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
//import App from './App';
import 'typeface-roboto';
//import registerServiceWorker from './registerServiceWorker';
import indexRoutes from './routes/indexRoutes';

const hist = createBrowserHistory();

ReactDOM.render(

    <Router history={hist}>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </Router>,
    document.getElementById('root'));
//registerServiceWorker();
