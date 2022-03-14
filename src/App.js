import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import React from 'react';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
      
      <div className="container mb-5 p-3 bg-dark ">
        <Navbar />
      </div>
      <Routes>        
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact" exact element={<ContactForm/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/single-product/:id"  element={<SingleProduct/>} />
        <Route path="*"  element={'404 Page Not Found'} />
        
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
