import React from "react";
import DefaultSite from "../../layouts/DefaultSite";
import { Route } from "react-router-dom";
// import views
import Dashboard from "../../views/Dashboard";
import Calendar from "../../views/Calendar";
import Documents from "../../views/Documents";
import Learning from "../../views/Learning";
import Logos from "../../views/Logos";
import News from "../../views/News";
import People from "../../views/People";
import Reminders from "../../views/Reminders";
import Suppliers from "../../views/Suppliers";
import WorkOrders from "../../views/WorkOrders/WorkOrders.js";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authenticated = () => {
  return (
    <DefaultSite>
      <Route path="/" exact component={Dashboard} title="Dashboard" />
      <Route path="/logos" component={Logos} />
      <Route path="/documents" component={Documents} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/reminders" component={Reminders} />
      <Route path="/news" component={News} />
      <Route path="/people" component={People} />
      <Route path="/suppliers" component={Suppliers} />
      <Route path="/learning" component={Learning} />
      <Route path="/workorders" component={WorkOrders} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </DefaultSite>
  );
};

export default Authenticated;
