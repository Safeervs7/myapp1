import React, { Component } from 'react';
import { Redirect } from 'react-router'

class RedirectHome extends Component {

    constructor(){
        super();
        this.state = {
            redirect: false,
        }
        console.log("this.state:", this.state);
    };
    render(){
        console.log("this.state:", this.state);
        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }
    }
}

export default RedirectHome;