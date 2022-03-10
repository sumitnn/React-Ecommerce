import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/Context';
const Sidebar = () => {
    const [,,,dispatchh] = useContext(DataContext);
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
                          <input className="form-check-input" type="checkbox" onChange={()=>dispatchh({type:"ascending"})} role="switch" id="flexSwitchCheckChecked"/>
                              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Ascending</label>
                      </div></li>
                      
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Decending</label>
                      </div></li>
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Fast Delivery</label>
                      </div></li>
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">In Stock</label>
                      </div></li>
                  <li className="nav-item">
                      <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Latest</label>
                      </div></li>
              
              </ul>
                  <hr/>
                     
                  </div>
    </>
  )
}

export default Sidebar