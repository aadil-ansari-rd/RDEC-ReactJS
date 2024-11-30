
function First() {
  function add() {
    let a = document.getElementById("fno").value ;
    let b = document.getElementById("sno").value ;
    let c = parseInt(a)+parseInt(b);
    document.getElementById("result").value =c ;
  }
  return (
    <div>
      <table>
        <tr>
          <td>First No</td>
          <td>
            <input type="text " id="fno" />
          </td>
        </tr>
        <tr>
          <td>Second No </td>
          <td>
            <input type="text " id="sno" />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="text " id="result" />
          </td>
        </tr>
        <tr>
          <button onClick={add}>Add</button>
        </tr>
      </table>
    </div>
  );
}
export default First;
