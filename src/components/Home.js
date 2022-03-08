import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './main.css';
const Home = () => {
  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                        <Sidebar/>
                  </div>
                  <div className="col-md-8">
                      <div className="row">
                          <Main />
                      </div>
                  </div>
              </div>

          </div>

    </>
  )
}

export default Home