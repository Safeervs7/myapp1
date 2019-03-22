import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="http://localhost:3001/login" method="post">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br></br>
                                    <input type="text" name="username" id="username" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br></br>
                                    <input type="text" name="password" id="password" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br></br>
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
    
export default Login;