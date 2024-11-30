import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Product from "./pages/Product";
import Productlist from "./pages/Productlist";
// import App from './App.jsx'
import Sidebarmenu from "./Sidebarmenu.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Sidebarmenu>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/anayltics" element={<Analytics />}></Route>
          <Route path="/comment" element={<Comment />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/list" element={<Productlist />}></Route>
        </Routes>
      </Sidebarmenu>
    </BrowserRouter>
  </StrictMode>
);
