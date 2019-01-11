import React from "react";
import DefaultSite from "../../layouts/DefaultSite/DefaultSite";
import { Route } from "react-router-dom";
// import views
import Dashboard from "../../views/Dashboard/Dashboard";
import Calendar from "../../views/Calendar/Calendar";
import Documents from "../../views/Documents/Documents";
import Learning from "../../views/Learning/Learning";
import Logos from "../../views/Logos/Logos";
import News from "../../views/News/News";
import People from "../../views/People/People";
import Reminders from "../../views/Reminders/Reminders";
import Suppliers from "../../views/Suppliers/Suppliers";
import WorkOrders from "../../views/WorkOrders/WorkOrders.js";
import Admin from "../../views/Admin/Admin.js";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

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
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" component={Admin} />
    </DefaultSite>
  );
};

export default Authenticated;
