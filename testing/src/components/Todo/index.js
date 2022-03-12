import { useState } from "react";
const defaultItems = [
  { name: "Item A" },
  { name: "Item B" },
  { name: "Item C" },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);
  const addItem = () => {
    setItems((prevState) => [...prevState, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
          Text
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <button onClick={addItem}>Ekle</button>
      <br />
      <br />

      {items.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </div>
  );
}

export default Todo;
