import React, { Component } from 'react';
import Login from './login';
import Header from './header';
import './loginPage.css';


class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <Header active="login"/>
                <div className="login">
                    <Login /> 
                </div>
            </div>
            );
    }
}
    
export default LoginPage;