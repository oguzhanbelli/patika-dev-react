import { useState, useEffect } from "react";
function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Oğuzhan");
  useEffect(() => {
    console.log("Number  State Güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("Component Mount Edildi İlk kez yüklendi");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />
    </div>
  );
}

export default Counter;
