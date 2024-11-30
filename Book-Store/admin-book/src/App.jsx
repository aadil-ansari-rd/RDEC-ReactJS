import { BrowserRouter, Routes, Route } from "react-router-dom";
//import BookCreate from './pages/BookCreate'
import BookCreateImg from "./pages/BookCreateImg";
import BookList from "./pages/BookList";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import BookEdit from "./pages/BookEdit";
import Sidebarmenu from "./Sidebarmenu";
import ViewBook from "./pages/ViewBook";
import BookEditImg from "./pages/BookEditImg";
import UserList from "./pages/UserList";
import UserEditPage from "./pages/UserEditPage";

function App() {
  return (
    <BrowserRouter>
      <Sidebarmenu>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route
            path="/add/book"
            element={<BookCreateImg></BookCreateImg>}
          ></Route>
          <Route path="/books" element={<BookList></BookList>}></Route>
          <Route path="/edit/book/:id" element={<BookEditImg></BookEditImg>}></Route>
          <Route path="/view/book/:id" element={<ViewBook></ViewBook>}></Route>
          <Route path="/users" element={<UserList></UserList>}></Route>
          <Route path="/edit/user/:id" element={<UserEditPage></UserEditPage>}></Route>
        </Routes>
      </Sidebarmenu>
    </BrowserRouter>
  );
}

export default App;
