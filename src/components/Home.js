import React,{useContext} from 'react';
import Sidebar from '../components/Sidebar';
// import Main from '../components/Main';
import './main.css';
import DataContext  from '../common/Context';




const Home = () => {
    let Data= useContext(DataContext);
    console.log(typeof(Data));

  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                        <Sidebar/>
                  </div>
                  <div className="col-md-8">
                      <div className="row">
                          {/* {
                              data.map((val, i) => {
                                  return (
                                  {val}
                                      {/* <Main value={val} key={i} /> */ }
                                      
                                  )
                              })
                          } */}

                          
                      </div>
                  </div>
              </div>

          </div>

    </>
  )
}

export default Home