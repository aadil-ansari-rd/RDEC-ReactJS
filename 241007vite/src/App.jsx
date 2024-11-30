import {useState} from 'react'
function App() {
  let [ name , setName] = useState("Nausad"); // setName is a user defined fn name
  // Three ways in useState : 
  // 1. direct value 
  // 2. value trough a variable  with differnt name of the name used for variable 
  // 3. value tough a variable with same name of variable used
  function change(){
    let name = "India"
    setName(name);
    console.log(name , 'name')
  }
  return (
    <div>
      <h1>Welcome to react seriese</h1>
      <h1>Welcome to react seriese 2</h1>
      {name}
      <button onClick={change}>Change</button>
      {name}
    </div>
  )
}
export default App