import * as types from './const'
import api from '../../../../util/apiUtil'

const actRequest = () => {
    return {
        type: types.ADDUSER_REQUEST
    }
}

const actSuccess = (data) => {
    return {
        type: types.ADDUSER_SUCCESS,
        data
    }
}

const actFail = (err) => {
    return {
        type: types.ADDUSER_FAIL,
        err
    }
}

export const actAddUser = (data, navigate) => {
    return (dispatch) => {
        dispatch(actRequest())
        api.post('QuanLyNguoiDung/ThemNguoiDung', data)
            .then((result) => {
                console.log(result);
                if (result.data.statusCode === 200) {
                    console.log(result);
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(actFail(error))
            });
    }
}