import { useState } from "react";
import {useUser} from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
        
      setUser({
        id: 1,
        username: "ogibelli",
        bio: "lorem ipsum sit amet.",
      });
      setLoading(false);
    }, 1500);
 
  };
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
        
      setUser(null);
      setLoading(false);
    }, 1500);
 
  };
  return (
    <div>
   {
       !user &&    <button onClick={handleLogin}>{loading ? "Loading" : "Login"}</button>
   }
      <code>{JSON.stringify(user)}</code>
      <br />
      {
          user && <button onClick={handleLogout}>{loading ? "Loading" : "Logout"}</button>
      }
    </div>
  );
}

export default Profile;
