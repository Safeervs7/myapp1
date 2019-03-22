import React, { Component } from 'react';
import Register from './register';
import Header from '../header/header';
import './registerPage.css';

class RegisterPage extends Component {
    render() {
        return (
            <div className="registerPage">
                <Header active="register"/>
                <div className="register">
                    <Register /> 
                </div>
            </div>
            );
    }
}
    
export default RegisterPage;