import { Link ,Switch,Route,useRouteMatch, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import User from './User'
import '../App.css'
function Users() {
  const { path, url } = useRouteMatch();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  console.log(path,url)
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {loading
          ? "Loading"
          : users.map((user) => {
              return (
                <li key={user.id}>
                  <NavLink activeClassName="active" to={`${url}/${user.id}`}>{user.name}</NavLink>
                </li>
              );
            })}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}/>
          
      </Switch>
    </div>
  );
}

export default Users;
