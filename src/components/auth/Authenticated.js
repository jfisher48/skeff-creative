import React from "react";
import DefaultSite from "../../layouts/DefaultSite/DefaultSite";
import { Route } from "react-router-dom";
// import views
import Dashboard from "../../views/Dashboard/Dashboard";
import Documents from "../../views/Documents/Documents";
import Logos from "../../views/Logos/Logos";
import News from "../../views/News/News";
import People from "../../views/People/People";
import Resources from "../../views/Resources/Resources";
import WorkOrders from "../../views/WorkOrders/WorkOrders.js";
import Reports from "../../views/Reports/Reports.js";
import Admin from "../../views/Admin/Admin.js";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import ShelfStrips from "../../views/ShelfStrips/ShelfStrips";

const Authenticated = () => {
  return (
    <DefaultSite>
      <Route path="/" exact component={Dashboard} title="Dashboard" />
      <Route path="/logos" component={Logos} />
      <Route path="/documents" component={Documents} />
      <Route path="/news" component={News} />
      <Route path="/people" component={People} />
      <Route path="/resources" component={Resources} />
      <Route path="/workorders" component={WorkOrders} />
      <Route path="/shelfstrips" component={ShelfStrips} />
      <Route path="/reports" component={Reports} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" component={Admin} />
    </DefaultSite>
  );
};

export default Authenticated;
