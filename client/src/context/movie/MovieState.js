import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';

import { CLEAR_FILTER, GET_MOVIES, GET_MOVIES_FAIL } from '../types';

const MovieState = (props) => {
    const initialState = {
        movies: [],
        error: null,
    };

    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Get Contact
    const getMovies = () => {
        const res = axios
            .get('/api/movie')
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
    };

    // Update Movie
    const updateMovie = (formdata) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        const res = axios
            .put('/api/movie/' + formdata._id + '/', formdata, config)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {});
    };

    // Delete Movie
    const deleteMovie = (id) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        const res = axios
            .delete('/api/movie/' + id + '/', config)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {});
    };

    // Add Movie
    const addMovie = (movie) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        const res = axios
            .post('/api/movie/', movie, config)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
               
            });
    };

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                error: state.error,
                getMovies,
                updateMovie,
                deleteMovie,
                addMovie

            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieState;
