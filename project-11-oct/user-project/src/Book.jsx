import { useState } from "react";
import axios from 'axios'

function App() {
  let [title, setTitle] = useState('');
  let [authorName, setAuthorName] = useState('');
  let [isbnNo, setIsbnNo] = useState('');
  let [publicationHouse, setPublicationHouse] = useState('');
  let [price, setPrice] = useState('');
  function submitData() {
    title = document.getElementById("title").value;
    setTitle(title);
    authorName = document.getElementById("authorName").value;
    setAuthorName(authorName);
    isbnNo = document.getElementById("isbnNo").value;
    setIsbnNo(isbnNo);
    publicationHouse = document.getElementById("publicationHouse").value;
    setPublicationHouse(publicationHouse);
    price = document.getElementById("price").value;
    setPrice(price);
    let data = {
      title : title,
      authorName : authorName,
      isbnNo : isbnNo,
      publicationHouse : publicationHouse,
      price : price
    }
    axios({
      url : 'http://localhost:3000/add/book',
      method : 'post',
      data : data
    }).then((res)=>{
      console.log(res.data.success , 'data');
      console.log(res.data.message , 'message');
      if(res.data.success){
        alert("data saved successfully")
      }
    }).catch((err)=>{
      console.log(err.message);
      alert("Somthig went wrong");
    })
  }
  return (
    <div>
      <h1>Add Book</h1>
      <table>
        <tr>
          <td>Title</td>
          <td>
            <input type="text" id="title" />
          </td>
        </tr>
        <tr>
          <td>Author Name</td>
          <td>
            <input type="text" id="authorName" />
          </td>
        </tr>

        <tr>
          <td>ISBN No</td>
          <td>
            <input type="text" id="isbnNo" />
          </td>
        </tr>
        <tr>
          <td>Publication House</td>
          <td>
            <input type="text" id="publicationHouse" />
          </td>
        </tr>
        <tr>
          <td>Price</td>
          <td>
            <input type="text" id="price" />
          </td>
        </tr>
        <tr>
          <button onClick={submitData}>Submit Data</button>
        </tr>
      </table>
    </div>
  );
}

export default App;
