import { useState } from "react";
function App() {
  
  let [para1  , setPara1]= useState({
    color: "red",
    backgroundColor: "Yellow",
    border: "3px solid blue",
    fontFamily: "Arial",
    fontSize: "20px",
  })
  let [para2  , setPara2]= useState({
    color: "green",
    backgroundColor: "lightblue",
    border: "3px solid grey",
    fontFamily: "verdana",
    fontSize: "30px",
  })

  function changeStyle() {
    let para3 = para1;
    setPara1(para2);
    setPara2(para3);
    
  }
  

  return (
    <div>
      <p style={para1}>Welcome to paragraph 1</p>
      <p style={para2}>Welcome to paragraph 2</p>
      <button onClick={changeStyle}> Change Style </button>
    </div>
  );
}

export default App;
