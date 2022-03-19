import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';

import { GET_MOVIES , GET_MOVIES_FAIL } from '../types';

const MovieState = (props) => {
    const initialState = {
        movies: [],
        error: null,
    };

    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Get Contact
    const getMovies = async () => {
        const res = axios.get('/api/movie')
        .then((res) => {
            dispatch({
                type: GET_MOVIES,
                payload: res.data,
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_MOVIES_FAIL,
                payload: error.response.data.msg,
            });
        });
        // try {
        //     const res = axios.get('/api/movie');
        //     res.then((res) => {
        //         dispatch({ type: GET_MOVIES, payload: res.data });
        //     });
        // } catch (error) {
        //     dispatch({
        //         type: CONTACT_ERROR,
        //         payload: error.response.msg,
        //     });
        // }
    };

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                error: state.error,
                getMovies,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieState;
