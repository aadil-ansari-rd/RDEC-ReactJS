import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookCreate from "./pages/BookCreate";
import BookList from "./pages/BookList";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Sidebarmenu from "./Sidebarmenu";
import BookEdit from "./pages/BookEdit";
import BookCreateImg from "./pages/BookCreateImg";
function App() {
  return (
    <BrowserRouter>
      <Sidebarmenu>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/add/book" element={<BookCreateImg></BookCreateImg>}></Route>
          <Route path="/books" element={<BookList></BookList>}></Route>
          <Route path="/edit/book/:id" element={<BookEdit></BookEdit>}></Route>
        </Routes>
      </Sidebarmenu>
    </BrowserRouter>
  );
}
export default App;
