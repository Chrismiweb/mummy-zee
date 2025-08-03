import React from 'react'
import './App.css'
import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './component/Sidebar';
import AddProductPage from './Pages/Dashboard/AddProduct/AddProductPage';
import ProductListPage from './Pages/Dashboard/ProductList/ProductListPage';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SiignUp';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import AboutPage from './Pages/About/AboutPage';

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Signup" element={<SignUp />}/>
        <Route path="/about" element={<AboutPage />}/>

        {/* <Route path="/upload" element={<AddProductPage />}/> */}
        {/* <Route path="/products" element={<ProductListPage />}/> */}
        <Route path="/upload" element={
          <ProtectedRoute>
              <AddProductPage />
          </ProtectedRoute>
          } />
        <Route path="/products" element={
          <ProtectedRoute>
              <ProductListPage />
          </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
