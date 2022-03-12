import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setIsLoading(false);
        return setUsers(users);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {isLoading
          ? "Loading"
          : users.map((user, i) => {
              return <li style={{listStyleType:'none'}} key={i}>{user.name}</li>;
            })}
      </ul>
    </div>
  );
}

export default Users;
