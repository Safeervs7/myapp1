import React, { Component } from 'react';
import './css/header.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: "test"
    };
  }

  componentDidMount() {
    
  }
  render() {
    var home = "inactive";
    var about = "inactive";
    var login = "inactive";
    var register = "inactive";
    if(this.props.active == "home"){
        var home = "active";
    }
    if(this.props.active == "about"){
        var about = "active";
    }
    if(this.props.active == "login"){
      var login = "active";
    }
    if(this.props.active == "register"){
      var register = "active";
    }
    
    return (
      <div className="header">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand">My Company</p>
                </div>
                <ul className="nav navbar-nav">
                    <li className={home}><Link to="/">Home</Link></li>
                    <li className={about}><Link to="/about">About</Link></li>
                    <li className={login}><Link to="/login">Login</Link></li>
                    <li className={register}><Link to="/register">Register</Link></li>
                    {/* <li><a href="#">Contact</a></li> */}
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;
