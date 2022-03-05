import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
  console.log(filtered);
  return (
    <div>
      <input
        type="text"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => {
          return <li key={i}>
            <span>
            <p>{contact.fullname}</p>
            </span>
            <span>
            {contact.phone_number}
            </span>
             </li>;
        })}
      </ul>
    </div>
  );
}

export default List;
