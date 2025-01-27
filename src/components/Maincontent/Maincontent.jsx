import {useState} from "react";
import Num from "../Num/Num";
import Buttons from "../Buttons/Buttons";

function Maincontent() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="maincontent">
      <div className="container">
        <Num counter={counter} />
        <Buttons counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default Maincontent;
