import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actLogout } from '../../AuthPage/duck/action'

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(actLogout(navigate))
    }

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">

            <NavLink className="navbar-brand" href="#">Navbar</NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'active1 nav-link' : 'nav-link'} to="/admin/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'active1 nav-link' : 'nav-link'} to="/admin/add-user">Add User</NavLink>
                    </li>
                    <li className="nav-item pl-4">
                        <button className='btn btn-danger' onClick={handleLogout}>Đăng xuất</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
