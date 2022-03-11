import React from 'react';
import './cart.css';
import { CartState } from '../contexts/Context';

const Cart = () => {
    const { state, dispatch } = CartState();
    let sum = 0;
    state.cart.forEach(value => {
        sum += value.qty * value.price;
    });
    
  return (
      <>
          <div className="container m-5 p-5">
              <h3 className=" text-warning">E-Shop Cart ({state.cart.length ===0 ? "No" :state.cart.length}) -- Items</h3>
              <hr/>

          <div className="shopping-cart">

              <div className="column-labels">
                  <label className="product-image">Image</label>
                  <label className="product-details">Product</label>
                  <label className="product-price">Price</label>
                  <label className="product-quantity">Quantity</label>
                  <label className="product-removal">Remove</label>
                  <label className="product-line-price">Total</label>
              </div>

                  {
                      state.cart.map((cur) => {
                          return (
                              <div className="product p-2 m-3" key={cur.id}>
                                  <div className="product-image">

                                      <img src={cur.image} alt={cur.name} />
                                  </div>
                                  <div className="product-details">
                                      <div className="product-title">{cur.name}</div>
                                      <p className="product-description">{cur.description }</p>
                                  </div>
                                  <div className="product-price">{cur.price}</div>
                                  <div className="product-quantity">
                                      <input type="number" onChange={(e) => {
                                          dispatch({
                                              type: 'CHANGE_CART_QTY', payload: {
                                                  id: cur.id,
                                                  qty:e.target.value,
                                          }})
                                      }}  value={cur.qty} />
                                  </div>
                                  <div className="product-removal">
                                      <button className="remove-product" onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:cur})}}>
                                          Remove
                                      </button>
                                  </div>
                                  <div className="product-line-price">{cur.price * cur.qty}</div>
                              </div>
                          )

                      })
                  }
              

            

              <div className="totals border">
                  <div className="totals-item">
                      <label>Subtotal</label>
                          <div className="totals-value" id="cart-subtotal">{
                          sum
                           }</div>
                  </div>
                  <div className="totals-item">
                      <label>Tax (5%)</label>
                      <div className="totals-value" id="cart-tax">3.60</div>
                  </div>
                  <div className="totals-item">
                      <label>Shipping</label>
                      <div className="totals-value" id="cart-shipping">15.00</div>
                  </div>
                  <div className="totals-item totals-item-total">
                      <label>Grand Total</label>
                      <div className="totals-value" id="cart-total">90.57</div>
                  </div>
              </div>

              <button className="checkout">Checkout</button>

              </div></div>
    </>
  )
}

export default Cart