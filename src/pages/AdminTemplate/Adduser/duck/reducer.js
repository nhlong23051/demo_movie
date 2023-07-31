import * as types from './const'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADDUSER_REQUEST:
            state.loading = true;
            state.data = action.data;
            state.error = null
            return { ...state }

        case types.ADDUSER_SUCCESS:
            state.loading = null;
            state.data = true;
            state.error = null
            console.log(action);
            return { ...state }

        case types.ADDUSER_FAIL:
            state.loading = null;
            state.data = null;
            state.error = action.error
            console.log(action);
            return { ...state }

        default:
            return { ...state }
    }
}