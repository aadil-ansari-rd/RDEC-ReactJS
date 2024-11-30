import { useState } from "react";
function Component2(props) {
  let [si, setSi] = useState();
  function simpleInterest() {
    si = (props.p * props.r * props.t) / 100;
    setSi(si);
  }

  return (
    <div>
      <h1>It is Component2</h1>
      <h3>Principle Amount : {props.p}</h3>
      <h3>Rate of Intrest : {props.r}</h3>
      <h3>Time Period : {props.t}</h3>
      <button onClick={simpleInterest}>Calcute Simple Intrest </button>
      <h1>Result : {si}</h1>
    </div>
  );
}

export default Component2;
