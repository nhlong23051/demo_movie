import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from './_component/Navbar/navbar'
import { useDispatch } from 'react-redux'
import { actTryLogin } from './AuthPage/duck/action'

export default function AdminTemplate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actTryLogin(navigate))
    }, [])
    if (!localStorage.getItem('admin')) {
        // redirect => auth
        return <Navigate to='/auth-page' replace />
    }
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

