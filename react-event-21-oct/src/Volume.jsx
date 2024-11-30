function Volume() {
  function calculateVolume(choice) {
    let volume = 0;
    let r = parseInt(document.getElementById("r").value);
    if (r === "") {
      alert("please enter the radius");
      return;
    }
    let h = parseInt(document.getElementById("h").value);
    if (h === "") {
      alert("Please enter the height");
      return;
    }
    let pi=22/7;
    if (choice === "c") {
      volume = (1/3)*pi*r*r*h;
    } else if (choice === "cy") {
      volume =pi * r*r*h;
    } else if (choice === "s") {
      volume =(4/3)*pi*r*r*r
    }
    document.getElementById("Vol").value = volume;
  }

  return (
    <div>
      <h1>Calculate Volume</h1>
      <table>
        <tr>
          <td>Radius:</td>
          <td><input type="text" id="r"></input></td>
        </tr>
        <tr>
          <td>Height:</td>
          <td><input type="text" id="h"></input></td>
        </tr>
        <tr>
          <td>Volume:</td>
          <td><input type="text" id="Vol"></input></td>
        </tr>
        <tr>
          <td>
            <button onClick={() => calculateVolume("c")}>Cone</button>
          </td>
          <td>
            <button onClick={() => calculateVolume("cy")}>Cylinder</button>
          </td>
          <td>
            <button onClick={() => calculateVolume("s")}>Sphere</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Volume;
