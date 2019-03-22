import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './about';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';

ReactDOM.render(
    // <App />, document.getElementById('root')
    <Router>
        <Route exact path="/" component={App} />
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
