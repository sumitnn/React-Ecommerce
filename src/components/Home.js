import React,{useContext} from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './main.css';
import { DataContext } from '../contexts/Context';

const Home = () => {
    const [data] = useContext(DataContext);
    
    
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
                              data.map((val, i) => {
                                  return (
                                      <Main value={val} key={i} />
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