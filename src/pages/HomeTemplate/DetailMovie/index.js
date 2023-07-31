import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { actFetchDetailMovie } from './duck/action'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../../component/loader/loader'

function DetailMovie(props) {
    let params = useParams()
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.detailMovieReducer.loading);
    const data = useSelector((state) => state.detailMovieReducer.data);

    useEffect(() => {
        // props.actFetchDetail(params.id)
        dispatch(actFetchDetailMovie(params.id))
    }, [])
    if (loading) return <Loader />
    return (
        <div className='container'>
            <h3 className='text-center'>Detail Movie</h3>
            <div className='table'>
                <tbody>
                    <tr>
                        <td>Tên phim</td>
                        <td>{data && data.tenPhim}</td>
                    </tr>
                    <tr>
                        <td>Mô tả</td>
                        <td>{data && data.moTa}</td>
                    </tr>
                </tbody>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         data: state.listMovieReducer.data,
//         loading: state.listMovieReducer.loading
//     }
// }

// const mapDispathToProps = (dispatch) => {
//     return {
//         actFetchDetail: (id) => {
//             dispatch(actFetchDetailMovie(id))
//         }
//     }
// }

export default connect(null, null)(DetailMovie)