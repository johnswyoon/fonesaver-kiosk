import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import fire from "./firebase";
import "./styles/app.scss";

import Nav from "./components/Navigation";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <div>
      <Nav />
      <Container>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route path="/signup" component={() => <Signup />} />
              <Route path="/login" component={() => <Login />} />
              <PrivateRoute path="/account" component={() => <Account />} />
              <Route
                path="/forgot-password"
                component={() => <ForgotPassword />}
              />
              <PrivateRoute
                path="/update-profile"
                component={() => <UpdateProfile />}
              />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    </div>
  );
}

export default App;
