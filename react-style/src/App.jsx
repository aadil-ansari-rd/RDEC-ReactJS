import { useState } from "react";
function App() {
  let [active, setActive] = useState(false);
  let myStyle = {
    color: "red",
    backgroundColor: "pink",
  };
  let myStyle1 = {
    border: "4px solid black",
  };

  function changeStyle() {
    active = true;
    setActive(true);
  }
  if (active) {
    myStyle1.border = "4px solid red";
  }

  return (
    <div>
      {/* <h1 style ={{color:'red',backgroundColor:'pink'}}>We are going to learn CSS in JS</h1> */}
      {/* <h1 style ={{color:'blue',backgroundColor:'yellow'}}>We are going to learn CSS in JS</h1> */}
      <h1 style={{ ...myStyle, ...myStyle1 }}>
        We are going to learn CSS in JS
      </h1>
      <button onClick={changeStyle} style={myStyle1}>
        {" "}
        Click Here
      </button>
    </div>
  );
}

export default App;
