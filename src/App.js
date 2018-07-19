import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import DefaultSite from './layouts/DefaultSite';
import { Switch, Route, Redirect } from 'react-router-dom';
// import views
import Dashboard from './views/Dashboard';
import Calendar from './views/Calendar';
import siteRoutes from './routes/routes';

const switchRoutes = (
  <Switch>
    {siteRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      else
        return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends Component {
  
  render() {
    return (      
      <DefaultSite>
        {switchRoutes}
      </DefaultSite>            
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
