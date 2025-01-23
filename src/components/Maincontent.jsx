import {use, useState} from "react";
import Refresh from "./../assets/img/refresh.png";

function Maincontent() {
  const [counter, setCounter] = useState(0);

  function plus() {
    return setCounter(counter + 3);
  }

  function minus() {
    if (counter > 1) {
      return setCounter(counter - 2);
    }
  }

  function reset() {
    return setCounter(0);
  }

  return (
    <div className="maincontent">
      <div className="container">
        <div className="num">
          <h1>{counter}</h1>
        </div>
        <div className="buttonContent">
          <button onClick={plus} className="btnPlus">
            +
          </button>
          <button className="btnRefresh" onClick={reset}>
            <img src={Refresh} alt="refresh" />
          </button>
          <button onClick={minus} className="btnMinus">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
