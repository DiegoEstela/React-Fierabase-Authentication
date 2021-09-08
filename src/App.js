import "./App.css";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Home } from "./Components/Home";

import { AuthProvider } from "./Context/AuthContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
