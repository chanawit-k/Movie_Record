import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import UserContext from '../../context/user/userContext';

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext)    

    const { setAlert } = alertContext;
    const { login, clearErrorsLogin ,  isAuthenticated ,error } = userContext;

    const initialContact = {
        userName: '',
        password: '',
    };

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error) {
            setAlert(error, 'danger');
            clearErrorsLogin();
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState(initialContact);

    const { userName, password } = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (userName === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                userName,
                password,
            });
        }
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>username</label>
                    <input
                        type='text'
                        name='userName'
                        value={userName}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Login;
