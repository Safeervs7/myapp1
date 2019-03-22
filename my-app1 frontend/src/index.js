import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/homePage/home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/aboutPage/about';
import LoginPage from './components/loginAndRegister/loginPage';
import RegisterPage from './components/loginAndRegister/registerPage';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
    </Router>
    ,document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
