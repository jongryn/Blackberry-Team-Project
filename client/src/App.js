import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Management from "./pages/Management";
import ResSignUp from "./pages/ResSignUp";
import CusSignIn from "./pages/CusSignIn";
import Trivia from "./pages/Trivia";
import Restaurants from "./pages/Restaurants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Management" component={Management} />
        <Route exact path="/ResSignUp" component={ResSignUp} />
        {/*<Route exact path="/CusSignIn" component={CusSignIn} />*/}
        <Route exact path="/Trivia/" component={Trivia} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/management/:id" component={Management} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
