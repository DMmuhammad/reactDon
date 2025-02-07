// import Header from "./components/Header/Header";
// import Maincontent from "./components/Maincontent/Maincontent";
// import Footer from "./components/Footer/Footer";
import {useState} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  console.log(todos);

  const handleRemove = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    let newTodo = {
      text: text,
      complited: false,
    };

    setText("");

    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  return (
    <form onSubmit={addTask} className="container mx-auto ">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex items-center justify-between gap-3 mb-4">
            <input type="checkbox" defaultChecked={todo.complited} />
            <p>{todo.text}</p>
            <button onClick={() => handleRemove(todo.id)} className="ml-auto border-2 border-red-500 px-2 py-1 rounded-2xl">
              X
            </button>
          </div>
        );
      })}
      <div className="flex items-center justify-between">
        <input value={text} onChange={(e) => handleChange(e)} type="text" className="w-full py-2 px-4 border-gray-300 border-2" />
        <button className="ml-auto border-2 border-sky-500 px-2 py-1 rounded-2xl text-sky-500">ADD</button>
      </div>
    </form>
  );
}

export default App;
