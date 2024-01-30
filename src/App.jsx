import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import todoImage from "./todo.png";

function App() {
  return (
    <>
      <div className="App">
        <TodoWrapper />
      </div>
      <div className="img">
        <img src={todoImage} alt="logo" />
      </div>
    </>
  );
}

export default App;
