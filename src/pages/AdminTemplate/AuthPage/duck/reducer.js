import * as types from './const'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }

        case types.LOGIN_SUCCESS:
            state.loading = false
            state.data = action.data
            state.error = null
            return { ...state }

        case types.LOGIN_FAIL:
            state.loading = false
            state.data = null
            state.error = action.err
            return { ...state }

        case types.LOGOUT:
            state.loading = false
            state.data = null
            state.error = null
            return { ...state }

        default:
            return { ...state };
    }
}