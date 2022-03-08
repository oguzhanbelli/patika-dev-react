import React from "react";
import About from "./components/About.js";
import Users from "./components/Users.js";
import Home from "./components/Home";
import Error404 from "./components/Error404.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
           
          <Route path="/users" component={Users}/>
           
          <Route path="*" component={Error404}/>
           
        </Switch>
      </div>
    </Router>
  );
}
export default App;
