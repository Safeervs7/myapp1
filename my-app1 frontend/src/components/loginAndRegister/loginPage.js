import React, { Component } from 'react';
import Login from './loginView';
import Header from '../header/header';
import './loginPage.css';


class LoginPage extends Component {
    render() {
        return (
            <div className="loginPage">
                <Header active="login"/>
                <div className="login">
                    <Login /> 
                </div>
            </div>
            );
    }
}
    
export default LoginPage;