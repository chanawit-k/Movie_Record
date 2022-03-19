import { GET_MOVIES , GET_MOVIES_FAIL } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case GET_MOVIES_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
