import React from 'react'
import { BrowserRouter as Router, Switch, Route }  from "react-router-dom";

import Todo from '../todo/todo'
import About from '../about/about'

export default props => {
    return (
        <Router>
            <Switch>
                <Route path='*' component={Todo}/>
                <Route path='/todos' component={Todo}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    )
}