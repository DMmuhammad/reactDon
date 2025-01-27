import Refresh from "../../assets/img/refresh.png";

function Buttons({counter, setCounter}) {
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
  );
}

export default Buttons;
