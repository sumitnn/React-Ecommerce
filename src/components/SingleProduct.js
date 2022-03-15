import React from 'react';
import './single.css';
import { useParams,Link } from 'react-router-dom';
import { CartState } from '../contexts/Context';

const SingleProduct = () => {
    const { id } = useParams();
    const { state, dispatch} = CartState();
    let data = state.products.filter(function (value) {
        return value.id == id;
    });
    

  return (
      <div className="container">
          <section id="services" className="services section-bg">
              <div className="container-fluid">
                  
                  <div className="row row-sm">
                      <div className="col-md-6 _boxzoom">  
                      <img src=""    alt=".."/>
                      </div>
                      <div className="col-md-6">
                          <div className="_product-detail-content">
                              <p className="_p-name"> {data[0].name }</p>
                              <div className="_p-price-box">
                                  <div className="p-list">
                                      <span> M.R.P. : <i className="fa fa-inr"></i> <del> 1399  </del>   </span>
                                      <span className="price"> Rs. {data[0].price} </span>
                                  </div>
                                 
                                  <div className="_p-features">
                                      <span> Description About this product:- </span>
                                      {data[0].description}
                                  </div>
                                 
                                      
                                      <div className="_p-qty-and-cart mt-3">
                                          <div className="_p-add-cart">
                                          {
                                              state.cart.some(p => p.id === data[0].id) ? (
                                                  <button className="btn btn-secondary" onClick={() => { dispatch({ type: "REMOVE_FROM_CART", payload: data[0] }) }}>Remove From Cart</button>
                                              ) : (

                                                  <button className="btn btn-success" onClick={() => { dispatch({ type: "ADD_TO_CART", payload: data[0] }) }}>Add to Cart</button>
                                              )

                                          }

                   </div>
                                      </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="sec bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 title_bx">
                          <h3 className="title"> Similar Products   </h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12 list-slider mt-4">
                          <div className="owl-carousel common_wd  owl-theme" id="recent_post">
                              <div className="row">
                                  <div className="item col-md-4 m-3 p-2">
                                      <div className="sq_box shadow">
                                          <div className="pdis_img">
                                              <span className="wishlist">
                                         
                                              </span>
                                              <Link to="#">
                                                  <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" alt=""/>
                                              </Link>
                                          </div>
                                          <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                                          <div className="price-box mb-2">
                                              <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                              <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                                          </div>
                                          <div className="btn-box text-center">
                                              <button className="btn btn-sm" > <i className="fa fa-shopping-cart"></i> Add to Cart </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                             
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </div>
  )
}

export default SingleProduct