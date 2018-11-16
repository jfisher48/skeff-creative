import React, { Component } from "react";
//import PropTypes from 'prop-types'
import "./styles/App.css";
import DefaultSite from "./layouts/DefaultSite";
import { Route } from "react-router-dom";
// import views
import Dashboard from "./views/Dashboard";
import Calendar from "./views/Calendar";
import Documents from "./views/Documents";
import Learning from "./views/Learning";
import Logos from "./views/Logos";
import News from "./views/News";
import People from "./views/People";
import Reminders from "./views/Reminders";
import Suppliers from "./views/Suppliers";
import WorkOrders from "./views/WorkOrders/WorkOrders.js";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Authenticated from "./components/auth/Authenticated";
import UnAuthenticated from "./components/auth/UnAuthenticated";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { auth } = this.props;
    const layout = auth.uid ? <Authenticated /> : <UnAuthenticated />;
    return (
      // <DefaultSite>
      //   <Route path="/" exact component={Dashboard} title="Dashboard" />
      //   <Route path="/logos" component={Logos} />
      //   <Route path="/documents" component={Documents} />
      //   <Route path="/calendar" component={Calendar} />
      //   <Route path="/reminders" component={Reminders} />
      //   <Route path="/news" component={News} />
      //   <Route path="/people" component={People} />
      //   <Route path="/suppliers" component={Suppliers} />
      //   <Route path="/learning" component={Learning} />
      //   <Route path="/workorders" component={WorkOrders} />
      //   <Route path="/signin" component={SignIn} />
      //   <Route path="/signup" component={SignUp} />
      // </DefaultSite>
      <div>{layout}</div>
    );
  }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
