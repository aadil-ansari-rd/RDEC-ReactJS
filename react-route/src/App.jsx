import { BrowserRouter , Route , Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Book from './Components/Book'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/about' element={ <About></About> }></Route>
        <Route path='/Contact' element={ <Contact></Contact> }></Route>
        <Route path='/book' element={ <Book></Book> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
