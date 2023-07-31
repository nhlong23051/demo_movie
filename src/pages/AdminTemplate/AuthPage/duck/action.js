import * as types from './const'
import api from '../../../../util/apiUtil'
import { data } from 'jquery'

const actRequest = () => {
    return {
        type: types.LOGIN_REQUEST
    }
}

const actSuccess = (data) => {
    return {
        type: types.LOGIN_SUCCESS,
        data
    }
}

const actFail = (err) => {
    return {
        type: types.LOGIN_FAIL,
        err
    }
}

const TIME_EXP = 60 * 60 * 1000

export const actFetchLogin = (data, navigate) => {
    return (dispatch) => {
        dispatch(actRequest())
        api.post('QuanLyNguoiDung/DangNhap', data)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content
                    if (user.maLoaiNguoiDung !== 'QuanTri') {

                        // return về sai
                        const error = {
                            response: {
                                data: {
                                    content: 'Bạn không có quyền truy cập!'
                                },
                            },
                        }
                        return Promise.reject(error)
                    } else {
                        const date = new Date().getTime();
                        const exp = TIME_EXP + date
                        localStorage.setItem('exp', exp)
                        dispatch(actTimeOutLogout(navigate, TIME_EXP))

                        dispatch(actSuccess(user));
                        localStorage.setItem('admin', JSON.stringify(user))
                        navigate('/admin/dashboard', { replace: true })
                    }
                }
            })
            .catch((error) => {
                dispatch(actFail(error))
            });
    }
}

const actTimeOutLogout = (navigate, exp) => {
    localStorage.removeItem('admin')
    localStorage.removeItem('exp')
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogout(navigate))
        }, exp)
    }
}

export const actTryLogin = (navigate) => {
    const data = JSON.parse(localStorage.getItem('admin'))
    return (dispatch) => {
        const admin = localStorage.getItem('admin')
        if (!admin) return

        const exp = localStorage.getItem('exp')
        const newExp = new Date().getTime()

        if (newExp > exp) {
            dispatch(actLogout(navigate))
            return
        }
        dispatch(actTimeOutLogout(navigate, exp - newExp))
        dispatch(actSuccess(data))
    }
}


export const actLogout = (navigate) => {
    localStorage.removeItem('admin')

    navigate('/auth-page', { replace: true })

    return {
        type: types.LOGOUT
    }
}