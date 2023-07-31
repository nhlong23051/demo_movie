import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actAddUser } from './duck/action'

export default function Adduser() {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: 'GP03',
        maLoaiNguoiDung: 'KhachHang',
        hoTen: ''
    })
    const handleValue = (e) => {
        let { name, value } = e.target
        setState({
            ...state,
            [name]: value,
        })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(actAddUser(state))
    }
    return (
        <div className='container'>
            <h3 className='text-center'>Adduser</h3>
            <br />
            <form action="/action_page.php" onSubmit={(event) => handleLogin(event)}>
                <div className="form-group">
                    <label htmlFor="uname">Tài khoản</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        type="text"
                        className="form-control"
                        name="taiKhoan" required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Mật khẩu</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        className="form-control"
                        name="matKhau" required />
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        className="form-control"
                        name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="">SDT</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        className="form-control"
                        name="soDt" required />
                </div>

                <div className='form-group'>
                    <label>Mã loại người dùng</label>
                    <select className='form-control' name='maLoaiNguoiDung'>
                        <option value='KhachHang'>Khách hàng</option>
                        <option value='QuanTri'>Quản trị</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Họ tên</label>
                    <input
                        onChange={(event) => handleValue(event)}
                        className="form-control"
                        name="hoTen" required />
                </div>

                <button type="submit" className="btn btn-success">Adduser</button>
            </form>
        </div>
    )
}
