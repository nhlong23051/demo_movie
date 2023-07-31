import * as types from './const'
import api from '../../../../util/apiUtil'

const actRequest = () => {
    return {
        type: types.DETAIL_MOVIE_REQUEST
    }
}

const actSuccess = (data) => {
    return {
        type: types.DETAIL_MOVIE_SUCCESS,
        data
    }
}

const actFail = (err) => {
    return {
        type: types.DETAIL_MOVIE_FAIL,
        err
    }
}

export const actFetchDetailMovie = (id) => {
    return (dispatch) => {
        dispatch(actRequest())
        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actSuccess(result.data.content))
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(actFail(error))
            });
    }
}