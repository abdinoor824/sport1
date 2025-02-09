import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Register from './components/Register/register';
import Login from './components/Login/login';
import './App.css';
import Home from './components/pages/home2';

const App = () => {
  return (
    <>
  
        <Navbar />
       
        
      
          
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        
     
    </>
  );
};

export default App;
