import { useState } from "react";
function Add(props){
    let[ result,setResult] = useState(0);
    function add(){
       result = props.fno + props.sno;
       setResult(result);
    }

   return (
    <div>
        <h1>Addition of two numbers</h1>
        <h2>First Number : {props.fno}</h2>
        <h2>Second Number : {props.sno}</h2>
        <h1>Result:{result}</h1>
        <button onClick={add}>Calculate Addition</button>        
    </div>
   )
}

Add.defaultProps={
    firstNo:30
}
export default Add;