import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./styles/app.scss";

import Nav from "./components/Navigation";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
      <Nav />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/subscribe" component={() => <Subscribe />} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
