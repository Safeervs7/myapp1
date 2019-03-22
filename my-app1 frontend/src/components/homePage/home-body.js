import React, { Component } from 'react';

class HomeBody extends Component {
  render() {
    return (
            <div className="col-md-8 home-body">
                <h1 className="text-white font-weight-light text-uppercase font-weight-bold" >We Make Shipping</h1>
                <p className="mb-5">A Logistics Company</p>
                <p ><a href="#" className="btn btn-primary py-3 px-5 text-white">Get Started!</a></p>
            </div>
          );
    }
}

export default HomeBody;