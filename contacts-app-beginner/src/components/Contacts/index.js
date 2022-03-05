import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import './styles.css'

function Contacts() {
  const [contacts, setContacts] = useState([
      {fullname:"Oğuzhan",phone_number:"53504320892"},
      {fullname:"Arda",phone_number:"5556567765"},
      {fullname:"Emre",phone_number:"53504320892"},
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <p>Total Contacts ({contacts.length})</p>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
