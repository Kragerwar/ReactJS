import React from 'react';
import './index.css';
import {render} from "react-dom"
import App from './App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

render(
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={App}/>
        </Switch>
    </div>
    </Router>,
    document.getElementById('root')
);