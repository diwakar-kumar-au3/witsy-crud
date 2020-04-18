import React, { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logout from "./components/logout";

function App() {
  const [user, setuser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          component={() => <Login setuser={setuser} user={user} />}
        />
        <Route
          path="/signup"
          component={() => <Signup user={user} setuser={setuser} />}
        />
        <Route
          path="/dashboard"
          component={() => <Dashboard user={user} setuser={setuser} />}
        />
        <Route path="/logout" component={() => <Logout setuser={setuser} />} />
      </Router>
    </div>
  );
}

export default App;
