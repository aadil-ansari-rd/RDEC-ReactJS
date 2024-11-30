import { useState } from "react";
import axios from "axios";

function User() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [users, setUsers] = useState([]);

  //   function inputFirstName(e) {
  //     firstName = e.target.value;
  //     setFirstName(firstName);
  //   }
  //   function inputLastName(e) {
  //     lastName = e.target.value;
  //     setLastName(lastName);
  //   }
  //   function inputEmail(e) {
  //     email = e.target.value;
  //     setEmail(email);
  //   }
  //   function inputPassword(e) {
  //     password = e.target.value;
  //     setPassword(password);
  //   }
  function submitData() {
    
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    axios({
      //ek server se dusre server ko data send krne k lie axios ka use karte hai
      url: "http://localhost:3000/add/user",
      method: "post",
      data: data,
    })
      .then((res) => {
        console.log(res.data.success, "data");
        console.log(res.data.message, "message");
        users = res.data.users;
        setUsers(users);
        if (res.data.success) {
          alert("data saved successfully");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert("Somthig went wrong");
      });
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <table>
        <tr>
          <td>First Name</td>
          <td>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </td>
        </tr>

        <tr>
          <td>Email</td>
          <td>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </td>
        </tr>
        <tr>
          <button onClick={submitData}>Submit Data</button>
        </tr>
      </table>
      <hr />
      <table border="1">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th> Email</th>
        </tr>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default User;
