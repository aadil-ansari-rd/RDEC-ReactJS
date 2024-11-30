import { useState } from "react";
function App() {
  let para1 = {
    color: "red",
    backgroundColor: "Yellow",
    border: "3px solid blue",
    fontFamily: "Arial",
    fontSize: "20px",
  };
  let para2 = {
    color: "green",
    backgroundColor: "lightblue",
    border: "3px solid grey",
    fontFamily: "verdana",
    fontSize: "30px",
  };

  let [styleP1, setStyleP1] = useState(para1);
  let [styleP2, setStyleP2] = useState(para2);
  let [active, setActive] = useState(false);
  function changeStyle() {
    active = !active;
    setActive(active);
    if(active) {
      setStyleP1(para2);
      setStyleP2(para1);
    } else {
      setStyleP1(para1);
      setStyleP2(para2);
    }
  }

  return (
    <div>
      <p style={styleP1}>Welcome to paragraph 1</p>
      <p style={styleP2}>Welcome to paragraph 2</p>
      <button onClick={changeStyle}> Change Style </button>
    </div>
  );
}

export default App;
