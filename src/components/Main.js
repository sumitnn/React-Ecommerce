import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
      <main>
          <div className="container-fluid bg-trasparent my-4 p-3" style={{ "position": "relative" }}>
              <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                  <div className="col">
                      <div className="card h-100 shadow-sm"> <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">ASUS Rog</span> <span className="float-end price-hp">12354.00€</span> </div>
                              <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                              <div className="text-center my-4"> <Link to="#" className="btn btn-warning">Check offer</Link> </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card h-100 shadow-sm"> <img src="https://www.freepnglogos.com/uploads/notebook-png/notebook-laptop-png-images-you-can-download-mashtrelo-14.png" className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-success">12354.00€</span> <span className="float-end"><Link to="#">Example</Link></span> </div>
                              <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                              <div className="d-grid gap-2 my-4"> <Link to="#" className="btn btn-warning">Check offer</Link> </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card h-100 shadow-sm"> <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" className="card-img-top" alt="..."/>
                          <div className="label-top shadow-sm">Asus Rog</div>
                          <div className="card-body">
                              <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-success">12354.00€</span> <span className="float-end"><Link to="#" className="small text-muted">Reviews</Link></span> </div>
                              <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                              <div className="text-center my-4"> <Link to="#" className="btn btn-warning">Check offer</Link> </div>
                              <div className="clearfix mb-1"> <span className="float-start"><i className="far fa-question-circle"></i></span> <span className="float-end"><i className="fas fa-plus"></i></span> </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
      </main>
  )
}

export default Main