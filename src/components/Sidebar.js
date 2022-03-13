import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../contexts/Context';

const Sidebar = () => {
    const { sstate, sdispatch}= CartState();
  return (
      <>
          <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ "width": "280px" }}>
              <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <svg className="bi me-2" width="40" height="32"><use ></use></svg>
                  <span className="fs-4">Filter Product</span>
              </Link>
              <hr/>
                  <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={sstate.byascending} onChange={
                              (e)=>{sdispatch({type:'a',payload:"a"})}
                           }/>
                              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Ascending</label>
                      </div></li>
                      
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked" checked={sstate.byfastdelivery} onChange={
                              (e) => { sdispatch({ type: 'fd'}) }
                          }>Fast Delivery</label>
                      </div></li>
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked" checked={sstate.bystock} onChange={
                              (e) => { sdispatch({ type: 'is' }) }
                          }>In Stock</label>
                      </div></li>
                 
              
              </ul>
                  <hr/>
                     
                  </div>
    </>
  )
}

export default Sidebar