import React from 'react'
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import Todo from '../todo/toDo'
import About from '../about/about'

export default props => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/todos' component={Todo}/>
                <Route path='/about' component={About}/>
                <Route path='*'>
                    <h1>{useLocation().pathname}</h1>
                </Route>
                <Redirect from="*" to="/todos/"/>
            </Switch>
        </React.Fragment>
    )
}