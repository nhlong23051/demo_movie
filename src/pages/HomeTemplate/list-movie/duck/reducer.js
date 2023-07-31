import * as types from './const'

const innitialState = {
    loading: false,
    data: null,
    error: null
}

const listMovieReducer = (state = innitialState, action) => {
    switch (action.type) {
        case types.LIST_MOVIE_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }

        case types.LIST_MOVIE_SUCCESS:
            state.loading = false
            state.data = action.data
            state.error = null
            return { ...state }

        case types.LIST_MOVIE_FAIL:
            state.loading = false
            state.data = null
            state.error = action.err
            return { ...state }

        default:
            return { ...state }
    }
}

export default listMovieReducer