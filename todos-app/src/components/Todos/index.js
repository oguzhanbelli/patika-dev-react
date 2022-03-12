import { useState, useEffect } from "react";
import Input from "./Input";
import List from "./List";
import { uid } from "uid";
import Footer from "./Footer";
function Todos() {
  const [todos, setTodos] = useState([
    {
      content: "Learn JavaScript",
      id: uid(),
      completed: false,
    },
    {
      content: "Learn React",
      id: uid(),
      completed: false,
    },
    {
      content: "Learn Vue.js",
      id: uid(),
      completed: false,
    },
  ]);
  
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
   

    filterHandler();
  }, [todos, status]);

 

  return (
    <div>
      <Input addTodos={setTodos} todos={todos}></Input>
      <List  filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos} addTodos={setTodos} todos={todos}></List>
     {
       todos.length > 0 ?  <Footer
       addTodos={setTodos}
       todos={todos}
       filteredTodos={filteredTodos}
       setFilteredTodos={setFilteredTodos}
       status={status}

       setStatus={setStatus}
     ></Footer>:""
     }
    </div>
  );
}

export default Todos;
