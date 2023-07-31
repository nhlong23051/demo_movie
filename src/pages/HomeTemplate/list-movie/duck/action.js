import * as types from './const'
import api from '../../../../util/apiUtil'

const actFetchListMovie = () => {
    return (dispatch) => {
        dispatch(actRequest())
        api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actFail(error))
            });
    }
}

const actRequest = () => {
    return {
        type: types.LIST_MOVIE_REQUEST,
    }
}

const actSuccess = (data) => {
    return {
        type: types.LIST_MOVIE_SUCCESS,
        data
    }
}

const actFail = (err) => {
    return {
        type: types.LIST_MOVIE_FAIL,
        err
    }
}

export { actFetchListMovie }