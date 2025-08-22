import AppName from "./components/AppHeading";
import { AddTodo } from "./components/Apptodo";
import { TodoItem1 } from "./components/TodoItem1";
import { TodoItem2 } from "./components/TodoItem2";
import "./App.css";

function App() {

return (
  <div className="todo-container text-center">
    <AppName/>
    
    <div className="container text-center">
      <AddTodo />
      <TodoItem1 />
      <TodoItem2/>
      
    </div>
  </div>
);


}

export default App
