import { useState } from "react"

function Change(){
    let[firstNo , setFirstNo]= useState(0);
    function changeFirstNo(e){
        firstNo = e.target.value 
        setFirstNo(firstNo)
    }
    return(
        <div>
            <table>
                <tr>
                    <td>First No</td>
                    <td><input type="text" onChange={changeFirstNo} ></input> {firstNo}</td>
                    
                    
                </tr>
            </table>
        </div>
    )
}
export default Change