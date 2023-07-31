import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchLogin } from './duck/action'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
    })

    const error = useSelector((state) => state.loginReducer.error);

    const handleValue = (e) => {
        let { name, value } = e.target
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(actFetchLogin(state, navigate))
    }

    const loginSuccess = () => {
        return (
            error && (<div style={{ color: 'red' }}>{error.response.data.content}</div>)
        )
    }
    return (
        <div className='container'>
            <h3 className='text-center'>Auth Page</h3>
            <br />
            <form action="/action_page.php" onSubmit={(event) => handleLogin(event)}>
                <div className="form-group">
                    <label htmlFor="uname">Username:</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        name="taiKhoan" required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="matKhau" required />
                    {loginSuccess()}
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )


}
