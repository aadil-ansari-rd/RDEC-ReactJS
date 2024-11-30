import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Volume from './Volume.jsx'
import Add from './Add.jsx'
import Simple from './Simple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  <hr />
  <Volume />
  <hr />
  <Add fno={2} sno ={19}/>
  <hr />
  <Simple  r={10} t={2} p={1000}/>
  </StrictMode>,
)
