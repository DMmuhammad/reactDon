// import Header from "./components/Header/Header";
// import Maincontent from "./components/Maincontent/Maincontent";
// import Footer from "./components/Footer/Footer";
import {useState} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state);
  const plus = () => {
    dispatch({
      type: "PLUS",
    });
  };

  const minus = () => {
    dispatch({
      type: "MINUS",
    });
  };

  const refresh = () => {
    dispatch({
      type: "REFRESH",
    });
  };

  return (
    <div className="container mx-auto flex items-center flex-col mt-10">
      <h1 className="text-4xl mb-10">{number}</h1>
      <div className="flex items-center gap-5 text-center">
        <button onClick={plus} className="border-4 border-indigo-500  bg-indigo-500 text-white text-4xl py-2 px-4">
          +
        </button>
        <button onClick={refresh} className="border-4 border-indigo-500 bg-indigo-500 text-white text-4xl py-2 px-4">
          =
        </button>
        <button onClick={minus} className="border-4 border-indigo-500 bg-indigo-500 text-white text-4xl py-2 px-4">
          -
        </button>
      </div>
    </div>
  );
}

export default App;
