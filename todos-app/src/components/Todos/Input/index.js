import { useState, useEffect } from "react";
import { uid } from "uid";

function Input({ todos, addTodos }) {
  const initialFormValues = { content: "", id: uid(), completed: false };
  const [formTodo, setFormTodo] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setFormTodo({ ...formTodo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormTodo(initialFormValues);
  }, [todos]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (formTodo.content === "") {
      return false;
    } else {
      addTodos([...todos, formTodo]);
      console.log(formTodo.id);
    }
  };

  return (
    <section className="todoapp">
    <header className="header">
      <h1 >todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          name="content"
          onChange={onChangeInput}
          value={formTodo.content}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
    </section>
  );
}

export default Input;
