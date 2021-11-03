import React from "react";
import logo from "../assets/Logo-2.svg";
import LeadList from "./LeadList";
import LeadContext from "../context/LeadContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddLead from "./AddLead";
import SignIn from "./SignIn";

const App = () => {
  return (
    <LeadContext>
      <Router>
        <br />
        <div className="uk-container uk-width-1-2 uk-light uk-background-secondary uk-align-center">
          <img src={logo} alt="" />
          <Switch>
            <Route path="/createlead">
              <AddLead></AddLead>
            </Route>
            <Route path="/listlead">
              <h4>Painel de Leads</h4>
              <LeadList></LeadList>
            </Route>
            <Route path="/">
              <SignIn></SignIn>
            </Route>
          </Switch>
        </div>
      </Router>
    </LeadContext>
  );
};

export default App;
