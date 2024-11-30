import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";
function App() {
  let input = "add";
  if (input === "add") {
    return <Component1 fno={20} sno={10} />;
  } else {
    return <Component2 p={1000} r={10} t={2}  />;
  }
}

export default App;
