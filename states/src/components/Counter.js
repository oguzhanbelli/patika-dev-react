import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count == 0 || count < 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>Sayaç</h2>
      <h1>{count}</h1>
      <button onClick={increase}>Arttır</button>
      <button onClick={decrease}>Azalt</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  );
}

export default Counter;
