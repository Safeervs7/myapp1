import React, { Component } from 'react';

class Register extends Component{
    render(){
        return (
            <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                    <form className="form" action="http://localhost:3001/register" method="POST">
                    <fieldset>
                        <h1>Register</h1>
                        <div className="form-group">
                            <label className="text-info"  for="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="" className="form-control"></input>
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                    
                        <div className="form-group">
                            <label className="text-info" for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="" className="form-control"></input>
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                    
                        <div className="form-group">
                            <label className="text-info"  for="password_confirm">Password (Confirm)</label>
                            <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="form-control"></input>
                            <p className="help-block">Please confirm password</p>
                        </div>
                    
                        <div className="form-group">
                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Register"></input>
                        </div>
                    </fieldset>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
