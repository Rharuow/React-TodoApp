import React from 'react'
import { Link } from "react-router-dom"

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <Link to="/todos" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </Link>
            </div>

            <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li><Link to="/todos">Tarefas</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </div>

        </div>
    </nav>
)