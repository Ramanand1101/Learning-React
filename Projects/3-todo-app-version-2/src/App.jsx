import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

import "./App.css";

function App() {
  const todoItems=[{
    name:"Buy Milk",
    dueDate:"12/12/23" 
  },
  {
    name:"Do Exercise",
    dueDate:"12/11/23"
  },
  {
    name:"Going to School",
    dueDate:"12/11/23"
  }
]


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItem={todoItems}></TodoItems> 
    </center>
    
  );
}
export default App;
