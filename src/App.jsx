// import Header from "./components/Header/Header";
// import Maincontent from "./components/Maincontent/Maincontent";
// import Footer from "./components/Footer/Footer";
import {useState} from "react";

function App() {
  // Задача 1
  // const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
  // const positive = array.filter((item) => item > 0);

  // Задача 2
  // const messages = [
  //   {message: "hello", error: true},
  //   {message: "javascript", error: false},
  //   {message: "expovisiov", error: true},
  //   {message: "react", error: true},
  //   {message: "angular", error: false},
  //   {message: "es6", error: false},
  // ];

  // const result = messages.filter((mes) => mes.error === false);
  // console.log(result);

  // const [data, setData] = useState([
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "quis ut nam facilis et officia qui",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "fugiat veniam minus",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: "et porro tempora",
  //     completed: true,
  //   },
  //   {
  //     userId: 1,
  //     id: 5,
  //     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 6,
  //     title: "Muhammad ibn ridvan developer js",
  //     completed: false,
  //   },
  // ]);

  // const dataArr = data.filter((item) => {
  //   return item.id;
  // });

  // const remove = (id) => {
  //   let dataDel = data.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setData(dataDel);
  // };

  // Задача 3
  // const words = ["экспо", "js", "react", "css", "angular", "vue", "html"];
  // const appWords = words.map((item) => {
  //   return item.length < 5 ? "*" : item;
  // });
  // console.log(appWords);

  // Задача 4
  // const sendMessage = (message) => {
  //   /*
  //   * тут какой-то большой код для отправки сообщения
  //   */
  // };

  // const half = (number) => number / 2;

  // const showConsole = () => console.log('Экспо');

  // const concatWords = (first, second) => first + second;

  // Задача 5
  // function justText() {
  //   return 'expo';
  // }

  // function logging(text) {
  //   console.log(text);
  // }

  // function add(x, y) {
  //   const z = 3;
  //   return z * x * y;
  // }

  // function onlyPositive(number) {
  //   if (number < 0) {
  //     return false;
  //   }
  //   return true;
  // }

  return <div className="container"></div>;

  // <div className="container">
  //   <Header />
  //   <Maincontent />
  //   <Footer />
  // </div>
}

export default App;
