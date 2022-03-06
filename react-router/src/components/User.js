import { Link, NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>

      {loading ? (
        "loading"
      ) : (
        <div>
          <p>ID :{user.id}</p>
          <p>Name :{user.name}</p>
          <p>Name :{user.email}</p>
          <Link to={`/users/${Number(id) + 1}`}>Next User</Link>
        </div>
      )}
    </div>
  );
}

export default User;
