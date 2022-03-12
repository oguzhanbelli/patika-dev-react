import { useState } from "react";

function List({ todos, addTodos, filteredTodos, setFilteredTodos }) {
  const [checked, setChecked] = useState(false);

  const checkedChange = (e) => {
    console.log("checked", checked);
    setChecked(!e.target.checked);
  };

  const toggleComplete = (id) => {
    let updateTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setFilteredTodos(updateTodos);
  };

  const removeItem = (id) => {
    console.log("id", id);
    addTodos(todos.filter((item) => item.id !== id));
  };

  const allCheck = () => {
    setFilteredTodos(
      todos.filter((item) => {
        if (item.completed === false) {
          item.completed = !item.completed;
        }

        return item;
      })
    );
  };

  return (
    <section className="main">
      <button className="toggle-all" type="checkbox" />
      <label onClick={() => allCheck()} htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleComplete(todo.id)}
            className={todo.completed ? "completed" : ""}
          >
            <div className="view">
              <input
                className="toggle"
                checked={todo.completed}
                onChange={checkedChange}
                type="checkbox"
              />
              <label>{todo.content}</label>
              <button
                className="destroy"
                onClick={() => removeItem(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
