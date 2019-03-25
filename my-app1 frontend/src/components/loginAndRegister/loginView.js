import React, { Component } from 'react';
import fetchApiLoginControl from '../../controller/loginControl';
import { Redirect } from 'react-router-dom';
import './loginView.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            loginFailed: false
        }
    }

    handleSubmit(event, state){
        event.preventDefault();
        var response;
        var stateCall = ()=>{
            if(response.data.login){
                var redirect = {redirect: true};
                this.setState(redirect);
            }
            else{
                var loginFailed = {loginFailed: true};
                this.setState(loginFailed);
            }
        }
        async function main() {
            const fetchApiLoginControlObj = new fetchApiLoginControl(state);
            response = await fetchApiLoginControlObj.fetchApiLoginControlCall();
            stateCall();
        }
        main();
    }

    handleChange(event, key){
        let state = {};
        state[key] = event.target.value;
        this.setState( state )
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to={{
                pathname: '/',
                state: { login: true }
            }}/>
        }
        else{
            return (
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" onSubmit={event => this.handleSubmit(event, this.state)}>
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br></br>
                                        <input type="text" onChange={event => this.handleChange(event, "username")} name="username" id="username" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br></br>
                                        <input onChange={event => this.handleChange(event, "password")} type="text" name="password" id="password" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        {/* <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br></br> */}
                                        <div id={this.state.loginFailed ? 'login-failed' : 'login-success'}>
                                            Email or Password is incorrect
                                        </div>
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
    
export default Login;