import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import userReducer from './userReducer';

import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, LOGOUT } from '../types';


const UserState = (props) => {
    const initialState = {
        user: null,
        isAuthenticated: false,
        error: null,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    // Login
    const login = async (formdata) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        const res = axios
            .post('/api/user/login/', formdata, config)
            .then((res) => {
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: error.response.data.msg,
                });
            });
    };

    // logout
    const logout = async (formdata) => {
        dispatch({ type: LOGOUT });
    };

    // clear error
    const clearErrorsLogin = () => {
        dispatch({ type: CLEAR_ERRORS });
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                error: state.error,
                login,
                logout,
                clearErrorsLogin,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;
