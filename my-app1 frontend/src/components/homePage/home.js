import React, { Component } from 'react';
import './css/home.css';
import Header from '../header/header';
import HomeBody from './home-body';
import LoadUserData from './loadUserData';

class App extends Component {

  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
        <Header active="home"/>
        <div>
          {!(this.props && this.props.location && this.props.location.state && this.props.location.state.login) ? <HomeBody/> : <LoadUserData login={true}/>}
        </div>
      </div>
    );
  }
}

export default App;
