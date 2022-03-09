import "./App.css";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import Palette from "./components/Palette";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();
    subscribe((color) => {
      console.log("Subc", color);
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
