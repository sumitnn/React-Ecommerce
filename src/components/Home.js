import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './main.css';
import { CartState } from '../contexts/Context';



const Home = () => {
    const { state,sstate } = CartState();
    const transform = () => {
        let products = state.products;
        if (sstate.byascending) {
            products = products.sort((a, b) => 
                sstate.byascending ==="a"?a.price -b.price :b.price -a.price
            )
        }
        if (sstate.bystock) {
            products=products.filter((a) =>a.instock)
        }
        if (sstate.byfastdelivery) {
            products = products.filter((a) => a.fastdelivery)
        }
        return products;
    }
    
    
  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                        <Sidebar/>
                  </div>
                  <div className="col-md-8">
                      <div className="row">
                          
                          {
                              transform().map((val, i) => {
                                  return (
                                      <Main value={val} key={i}/>
                                  )
                              })
                          }
                      </div>
                  </div>
              </div>

          </div>

    </>
  )
}

export default Home