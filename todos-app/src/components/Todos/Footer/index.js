import React from "react";

function Footer({
  todos,
  addTodos,
  filteredTodos,
  status,
  setFilteredTodos,
  setStatus,
}) {
  const statusHandler = (e) => {
    setStatus(e.target.id);
  };
  const itemsLeft = filteredTodos.filter(
    (item) => item.completed === false
  ).length;

  const removeHandler = () => {
    setFilteredTodos(
      todos.filter((item) => {
        if (item.completed === true) {
          item.completed = !item.completed;
        }

        return item;
      })
    );
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft} </strong>
        items left  
      </span>

      <ul className="filters">
        <li>
          <button
            onClick={statusHandler}
            className={`${status === "all" ? "selected" : ""}`}
            id="all"
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={statusHandler}
            className={`${status === "active" ? "selected" : ""}`}
            id="active"
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={statusHandler}
            className={`${status === "completed" ? "selected" : ""}`}
            id="completed"
          >
            Completed
          </button>
        </li>
      </ul>
      <button onClick={removeHandler} type="submit" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
