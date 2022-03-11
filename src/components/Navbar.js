import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { FaShopify } from 'react-icons/fa';
import { CartState } from '../contexts/Context';

const Navbar = () => {
const {state}= CartState();
  return (
      <>
          <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
              <div className="container">
                  <Link className="navbar-brand" to="/"><FaShopify style={{ "fontSize": "30px" }}/></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="fa fa-bars"></span> Menu
                  </button>
                  <div className="collapse navbar-collapse" id="ftco-nav">
                      <ul className="navbar-nav ml-auto mr-md-3">
                          <li className="nav-item "><Link to="/" className="nav-link">Home</Link></li>
                          <li className="nav-item"><Link to="#" className="nav-link">Accessories</Link></li>
                          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                       
                          </ul>
                      <div className="nav-link ">
                          <Link to="/cart" className="btn btn-outline-warning"><BiCart style={{ "fontSize": "30px" }} /> <span>{state.cart.length}</span> Cart</Link>

                      </div>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Navbar