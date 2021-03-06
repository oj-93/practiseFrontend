import React, { useState, useEffect } from "react";
import LoggedIn from "./Components/LoggedIn";
import facade from "./Components/apiFacade";
import LogIn from "./Components/Login";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from "./Components/NoMatch";
import AddComponent from "./Components/AddComponent";
import TripsTab from "./Components/TripsTab";
import CreateTripsTab from "./Components/CreateTripsTab"
import AllGuidesTab from "./Components/AllGuidesTab";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState("All is good... so far");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage("Logged out");
  };

  return (
    <Container>
      <Router>
        <Header facade={facade} LoggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Home
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
            />
          </Route>
          {facade.hasUserAccess("user", loggedIn) && (
              <Route path="/AllGuidesTab">
              <AllGuidesTab facade={facade} setErrorMessage={setErrorMessage} />
              </Route>
            )}
            {facade.hasUserAccess("user", loggedIn) && (
              <Route path="/TripsTab">
              <TripsTab facade={facade} setErrorMessage={setErrorMessage} />
              </Route>
            )}
            {facade.hasUserAccess("admin", loggedIn) && (
              <Route path="/CreateTripsTab">
              <CreateTripsTab facade={facade} setErrorMessage={setErrorMessage} />
              </Route>
            )}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
