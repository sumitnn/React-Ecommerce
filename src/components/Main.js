import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({value}) => {
  return (
      <> <div className="col-md-4 mb-5">
                      <div className="card h-100 shadow-sm"> <img src={value.image} className="card-img-top" alt="..."/>
                          <div className="card-body">
                      <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{value.title}</span> <span className="float-end price-hp">₹{value.price }</span> </div>
                      <h5 className="card-title">{value.description }</h5>
                              <div className="text-center my-4"> <Link to="#" className="btn btn-warning">Add to Cart</Link> </div>
                          </div>
                      </div>
                  </div>   
      </>
  )
}

export default Main