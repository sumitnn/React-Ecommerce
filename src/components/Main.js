import React,{useContext}  from 'react';
import { DataContext } from '../contexts/Context';

const Main = ({ value }) => {
    const [,,dispatch] = useContext(DataContext);
  return (
      <> <div className="col-md-4 mb-5">
                      <div className="card h-100 shadow-sm"> <img src={value.image} className="card-img-top" alt="..."/>
                          <div className="card-body">
                      <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{value.title}</span> <span className="float-end price-hp">₹{value.price }</span> </div>
                      <h5 className="card-title">{value.description }</h5>
                  <div className="text-center my-4"> <button onClick={() => dispatch({ type:"Increase"})} className="btn btn-warning">Add to Cart</button> </div>
                          </div>
                      </div>
                  </div>   
      </>
  )
}

export default Main