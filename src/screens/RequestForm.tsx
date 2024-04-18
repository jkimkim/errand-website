import React from "react";
import AuthProvider from "../Context/AuthContext";
import LogedInNav from "../components/LogedInNav";
import MostPopularReads from "../components/MostPopularReads";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";
import Settings from "../components/pages/Settings";
import Users from "../components/pages/Users";
import Documents from "../components/pages/Documents";
import RequestForm from "../components/pages/RequestForm";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <LogedInNav />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={Users} />
            <Route path="/documents" component={Documents} />
            <Route path="/request" component={RequestForm} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}
