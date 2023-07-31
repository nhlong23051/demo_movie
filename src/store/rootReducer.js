import { combineReducers } from 'redux'
import listMovieReducer from '../pages/HomeTemplate/list-movie/duck/reducer'
import { detailMovieReducer } from '../pages/HomeTemplate/DetailMovie/duck/reducer'
import { loginReducer } from '../pages/AdminTemplate/AuthPage/duck/reducer'
import { addUserReducer } from '../pages/AdminTemplate/Adduser/duck/reducer'
const rootReducer = combineReducers({
    listMovieReducer, detailMovieReducer, loginReducer, addUserReducer
})



export default rootReducer