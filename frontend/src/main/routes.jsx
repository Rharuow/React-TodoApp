import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link }  from "react-router-dom";

import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default props => {
    return (
        <Router>
            <Menu/>
            <Switch>
                <Route path='*' component={Todo}/>
                <Route path='/todos' component={Todo}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    )
}