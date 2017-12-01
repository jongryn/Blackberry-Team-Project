import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurants from "./pages/Restaurants";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Trivia from "./pages/Trivia";
import SignIn from "./pages/SignIn";
import WaitingList from "./pages/WaitingList";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trivia" component={Trivia} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/waitlist" component={WaitingList} />
        <Route exact path="/restaurants/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
