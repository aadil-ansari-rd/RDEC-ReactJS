function App() {
  function calculation(choice) {
    let result 
    let firstNo = document.getElementById("fno").value;
    if (firstNo === "") {
      alert("Please enter the first Number");
      return;
    }
    let secondNo = document.getElementById("sno").value;
    if (secondNo === "") {
      alert("Please enter the second Number");
      return;
    }

    if (choice === "a") {
      result = parseInt(firstNo) + parseInt(secondNo);
    } else if (choice === "s") {
      result = parseInt(firstNo) - parseInt(secondNo);
    } else if (choice === "m") {
      result = parseInt(firstNo) * parseInt(secondNo);
    } else if (choice === "d") {
      result = parseInt(firstNo) / parseInt(secondNo);
    } else {
      console.log("Invalid");
    }
    document.getElementById("result").value = result;
  }
  return (
    <div>
      <h1>Calculator</h1>
      <table>
        <tr>
          <td>First Number:</td>
          <td><input type="text" id="fno"></input></td>
        </tr>
        <tr>
          <td>Second Number:</td>
          <td><input type="text" id="sno"></input></td>
        </tr>
        <tr>
          <td>Result:</td>
          <td><input type="text" id="result"></input></td>
        </tr>
        <tr>
          <td>
            <button onClick={() => {calculation("a")}}>Add</button>
          </td>
          <td>
            <button onClick={() => {calculation("s")}}>Subtract</button>
          </td>
          <td>
            <button onClick={() => {calculation("m")}}>Multiply</button>
          </td>
          <td>
            <button onClick={() => {calculation("d")}}>divide</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
