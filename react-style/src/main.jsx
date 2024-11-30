import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Mypara from './Mypara.jsx'
import Component1 from './Component1.jsx'
import Component2 from './Component2.jsx'
import Component3 from './Component3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr />
    <Mypara />
    <hr />
    <Component1 show={false}/>
    <hr />
    <Component2/>
    <hr />
    <Component3/>

  </StrictMode>,
)
