import React  from 'react';
import { CartState } from '../contexts/Context';
import { Link } from 'react-router-dom';

const Main = ({ value }) => {
    const { state, dispatch } = CartState();
    
    
  return (
      <> <div className="col-md-4 mb-5">
          <div className="card h-100 shadow-sm">
              <Link to={`/single-product/${value.id}`}>   <img src={value.image} className="card-img-top" alt={value.name} /></Link>
                          <div className="card-body">
                      <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{value.name}</span> <span className="float-end price-hp">₹{value.price }</span> </div>
                      <h5 className="card-title">{value.description }</h5>
                  <div className="text-center my-4">
                      {
                          state.cart.some(p => p.id === value.id) ? (
                              <button className="btn btn-secondary" onClick={() => { dispatch({ type: "REMOVE_FROM_CART",payload: value}) }}>Remove From Cart</button>
                          ) : (
                                  
                  <button className="btn btn-success" onClick={()=>{dispatch({type:"ADD_TO_CART",payload:value})}}>Add to Cart</button>
                          )
                      
                      }
                      
                  
                  </div>
                  {value.instock ? <span className="badge rounded-pill bg-primary">In Stock</span> : <span className="badge rounded-pill bg-secondary">Not In Stock</span>}  
                          </div>
                      </div>
                  </div>   
      </>
  )
}

export default Main