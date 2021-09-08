import "./App.css";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Home } from "./Components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
