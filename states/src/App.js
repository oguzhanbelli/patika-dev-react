import "./App.css";

import { useState } from "react";

function App() {
  const [name, setName] = useState("Oğuzhan");
  const [age, setAge] = useState(22);
  const [friends, setFriends] = useState(["Ahmet", "Mahmut"]);
  const [address, setAddress] = useState({ title: "Bursa/İnegöl", zip: 16400 });

  console.log(name, age); //Bir state değiştiğinde state tekrar render edilir.
  return (
    <div>
      <h1>Merhaba {name} !</h1>
      <h2>{age}</h2>
      <button onClick={() => setAge(25)}>Tıkla Yaşı Değiştir</button>
      <button onClick={() => setName("Mehmet")}>Tıkla Değiştir</button>

      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Tıkla Arkadaş Ekle
      </button>
      <hr />
      <br />

      <h2>Address</h2>

      <div>
        {address.title} {address.zip}
      </div>


<br />
      <button onClick={() => setAddress({...address,title:"Ankara"})}>
      Tıkla Address Değiştir
      </button>

      <hr />

      <br />
    


    </div>
  );
}

export default App;
