import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(10);
  function increase() {
    counter = counter + 1;
    setCounter(counter);
  }
  function decrease() {
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <div>
      {counter}
      <br />
      <div>
        <button onClick={increase}>Increase {counter}</button>
        <button onClick={decrease}>Decrease {counter}</button>
      </div>
      Final value of counter: {counter}
    </div>
  );
}
export default App;
