import { useState } from 'react'

function App() {
  let [fno, setFno] = useState();
  let [sno, setSno] = useState();
  let [result , setResult ]= useState();

  function set(){
    setFno(document.getElementById("fno").value);
    setSno(document.getElementById("sno").value);
  }
  function add(){
    set();
    result = Number(fno) + Number(sno);
    setResult(result);
  }
  function subtract(){
    set();
    result = fno - sno;
    setResult(result);
  }
  function multiply(){
    set();
    result = fno * sno;
    setResult(result);
  }
  function divide(){
    set();
    result = fno / sno;
    setResult(result);
  }
  

  return (
    <div>
      
        <div>
          First Number :  <input type="text" name="" id='fno' />
        </div>
        <br />
        <div>
          Second Number : <input type="text" name="" id='sno' />
        </div>
        <br />
        <button onClick={()=>add()}> + </button>
        <button onClick={()=>subtract()}> - </button>
        <button onClick={()=>multiply()}> x </button>
        <button onClick={()=>divide()}> / </button>
        <br />
        <br />
        <div>
          Result : <input type="text" name="" id="" value= {result} />
        </div>
    
    </div>
  )
}

export default App
