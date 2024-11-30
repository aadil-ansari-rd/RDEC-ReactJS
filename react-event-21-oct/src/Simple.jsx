import { useState } from "react";
function Simple(props) {
  let [Si, setSi] = useState(0);
  function simpleInterest() {
    Si = (props.p * props.r* props.t) / 100;
    setSi(Si);
  }
  return (
    <div>
      <h1>Calculate Simple Intrest</h1>
      <h3>Principal:{props.p}</h3>
      < h3 >Rate:{props.r}</h3>
      <h3>Time:{props.t}</h3>
      <h3>Result:{Si}</h3>
      <button onClick={simpleInterest}>Calculate Simple Inrest</button>
      
    </div>
  );
}

Simple.defaultProps = {
    principal: 1000,
  };
  
export default Simple;