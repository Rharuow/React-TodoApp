import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import { BrowserRouter as Router, hashHistory } from 'react-router-dom'
import Menu from '../template/menu'
import Routes from './routes'

export default props => {
    return (
        <div className="container">
        <Router history={hashHistory}>
            <Menu/>
            <Routes/>
        </Router>
        </div>
    )
}