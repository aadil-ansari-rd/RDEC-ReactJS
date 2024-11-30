import { useState } from "react";
function Component1(props) {
  let [result, setResult] = useState();
  function add() {
    result = props.fno + props.sno;
    setResult(result);
  }
  return (
    <div>
      <h1>It is Component1</h1>
      <h3>First Number : {props.fno}</h3>
      <h3>Second Number : {props.sno}</h3>
      <button onClick={add}>Calculate Sum</button>
      <h1>Result:{result}</h1>
    </div>
  );
}

export default Component1;
