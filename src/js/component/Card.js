import React from "react";

const Card=() =>{
    return(
        <div className="col-12 col-md-4 col-3 col-xl-3">

<div className="card">
  <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <button type="button" className="btn btn-primary">Call to action</button>
  </div>
</div>  
        
        </div>
        );
};
export default Card