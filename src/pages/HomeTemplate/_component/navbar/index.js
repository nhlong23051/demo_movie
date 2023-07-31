import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                <NavLink className="navbar-brand" href="#">Navbar</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'active1 nav-link' : 'nav-link'} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'active1 nav-link' : 'nav-link'} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'active1 nav-link' : 'nav-link'} to="/list-movie">List movie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'active1 nav-link' : 'nav-link'} to="/hook">HooksPage</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
