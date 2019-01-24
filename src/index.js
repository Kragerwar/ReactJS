import React from 'react';
import './index.css';
import {render} from "react-dom"
import Appp from './components/App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

render(
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={Appp}/>
        </Switch>
    </div>
    </Router>,
    document.getElementById('root')
);