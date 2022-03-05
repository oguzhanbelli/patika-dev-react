import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });
  //   const [surname, setSurName] = useState("");
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //   const onChangeSurname = (event) => setSurName(event.target.value);
  return (
    <div>
      Please Enter a Name
      <input
        name="name"
        type="text"
        defaultValue={form.name}
        onChange={onChangeInput}
      />
      <br />
      <h1>{form.name}</h1>
      Please Enter a Surname
      <input
        name="surname"
        type="text"
        defaultValue={form.surname}
        onChange={onChangeInput}
      />
      <br />
      <h1>{form.surname}</h1>
      <p>
        {form.name} {form.surname}
      </p>
    </div>
  );
}
export default InputExample;
