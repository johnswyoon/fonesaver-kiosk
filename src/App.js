import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        {/* <Route path="/subscribe" component={() => <Subscribe />} /> */}
        <Route path="/about" component={() => <About />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
