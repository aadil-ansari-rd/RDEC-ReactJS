function SimpleIntrest(){
    function si(){
        let p = parseInt(document.getElementById("p").value) ;
        let r= parseInt(document.getElementById("r").value) ;
        let t = parseInt(document.getElementById("t").value) ;
        
        let si = (p*r*t)/100;
        document.getElementById("result").value = si ;
    }
    return(
        <div>
      <table>
        <tr>
          <td>Principle</td>
          <td>
            <input type="text " id="p" />
          </td>
        </tr>
        <tr>
          <td>Rate of Intrest </td>
          <td>
            <input type="text " id="r" />
          </td>
        </tr>
        <tr>
          <td>Time</td>
          <td>
            <input type="text " id="t" />
          </td>
        </tr>
        <tr>
          <td>Simple Intrest</td>
          <td>
            <input type="text " id="result" />
          </td>
        </tr>
        <tr>
          <button onClick={si}>Calculate</button>
        </tr>
      </table>
    </div>

    )
}
export default SimpleIntrest;