import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: null,
            };
        default:
            return state;
    }
};
