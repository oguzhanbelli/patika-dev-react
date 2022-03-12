import { useEffect, useState } from "react";

function Form({ addContact, contacts }) {
  console.log(addContact);

  const initialFormValues = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
      
        <div>
          <input
            onChange={onChangeInput}
            name="fullname"
            value={form.fullname}
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div>
          <input
            onChange={onChangeInput}
            name="phone_number"
            value={form.phone_number}
            placeholder="Phone Number"
            type="text"
          />
        </div>

        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
