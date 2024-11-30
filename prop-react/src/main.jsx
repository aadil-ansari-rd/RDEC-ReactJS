import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import User from "./User.jsx";
//import Dafault from "./Default.jsx";
//import Default from "./Default.jsx";

// import { Default , Default1  , Default3} from "./Default.jsx";
// import Default2 from "./Default.jsx";

// let course = 'mca';
// let user = {
//   name : "nausad",
//   age : 12,
//   salary : 1000 
// }
// let ar =[10,29,20,21];
let employees = [
  {
    name :"a",
    salary : 10000
  },
  {
    name :"a",
    salary : 12000
  },
  {
    name :"a",
    salary : 13000
  },
  {
    name :"a",
    salary : 14000
  },
  {
    name :"a",
    salary : 15000
  }
]
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App  data={employees}/>
    {/* <App name="nausad"  email="n@" age={10} course={course} p={1000} r={10}  t={2}  user={user} array={ar}/>   */}
    {/* <User name ="nausad" email="n@" age={23} /> */}
    {/* <Default/>
    <Default1/>
    <Default2/>
    <Default3/> */}
  
  </StrictMode>
);
