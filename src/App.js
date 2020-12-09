import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/subscribe" component={() => <Subscribe />} />
      </Switch>
    </div>
  );
}

export default App;
