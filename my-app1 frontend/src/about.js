import React, { Component } from 'react';
import Header from './header';
import Lorem from './lorem';
import './about.css'

class About extends Component {
    render() {
        return (
          <div className="About">
            <Header active="about"/>
            <div className="lorem">
                <Lorem /> 
            </div>
          </div>
        );
    }
}
    
export default About;