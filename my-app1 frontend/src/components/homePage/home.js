import React, { Component } from 'react';
import './css/home.css';
import Header from '../header/header';
import HomeBody from './home-body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header active="home"/>
        <HomeBody/>
      </div>
    );
  }
}

export default App;
