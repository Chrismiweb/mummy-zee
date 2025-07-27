import React from 'react'
import './App.css'
import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './component/Sidebar';
import AddProductPage from './Pages/Dashboard/AddProduct/AddProductPage';
import ProductListPage from './Pages/Dashboard/ProductList/ProductListPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/upload" element={<AddProductPage />}/>
        <Route path="/products" element={<ProductListPage />}/>




      </Routes>
    </BrowserRouter>
  )
}

export default App
