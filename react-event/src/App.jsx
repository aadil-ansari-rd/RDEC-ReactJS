import { useState } from "react";


function App() {
  let fno=10;
  let sno =20;
  let [result , setResult]=useState(0)


  let p = 1000;
  let r = 10 ;
  let t = 2;
  let[si , setSi]= useState(0);

  function show(fno , sno){  
    result = fno + sno ;
    setResult(result)
  }

  function sim(p , r, t){
    alert(p)
    alert(r)
    alert(t)
    si = p*r*t/100 
    setSi(si)
  }
  return (
    <div>
      <h1>We are going to start event .</h1>
      <button onClick={show}> Click here</button>
      <button onClick={()=>show(fno, sno)}> Click here callback </button>
      <button onClick={()=>sim(p,r,t)}> Simple Intrest </button>
      <h1>Result : {result}</h1>
      <h1>Si : {si}</h1>

    </div>
  )
}

export default App
