import "./App.css";
import User from "./components/User";

const name = "Oğuzhan";
const surname = "Belli";

const friends = [
  { id: 1, name: "Gökhan", age: 20 },
  { id: 2, name: "Ogi", age: 22 },
  { id: 3, name: "Emre", age: 20 },
];
const isLoggedIn = true;
function App() {
  return (
    <div>
      <User
        name={name}
        surname={surname}
        isLoggedIn={isLoggedIn}
        age={22}
        friends={friends}
        address={{
          title:"Bursa/İnegöl",
          zip:16400
        }}
      />
    </div>
  );
}

export default App;
