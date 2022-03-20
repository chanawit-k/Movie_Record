import React, { useState, useContext, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import MovieContext from '../../context/movie/movieContext';
import UserContext from '../../context/user/userContext';

const MovieItem = ({ movie }) => {

    const movieContext = useContext(MovieContext);
    const { updateMovie , deleteMovie } = movieContext;
    const userContext = useContext(UserContext);
    const { isAuthenticated, user } = userContext;

    const [showModal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [movieState, setMovieState] = useState(movie);
    const { title, _id, rate, yearRelease } = movieState;

    useEffect(() => {
        if(isAuthenticated){
            if(user.roleName === 'manager'){
                setDisabled(false)
            }else{
                setDisabled(true)
            }
        }
    }, [isAuthenticated, user]);

    const onOpenModal = () => {
        setModal(true);
    };

    const onCloseModal = () => {
        setModal(false);
    };

    const onChange = (e) => {
        setMovieState({ ...movieState, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCloseModal();
        updateMovie(movieState);
    };

    const onDelete = (e) =>{
        e.preventDefault();
        deleteMovie(_id)
    }

    return (
        <div>
            <div className='card bg-light mx-1 pb-1'>
                <h3 className='text-primary text-left'>{title} </h3>
                <ul className='list'>
                    <li>
                        <i className='fas fa-calendar' /> {yearRelease}
                    </li>
                    <li>
                        <i className='fas fa-star' /> {rate}
                    </li>
                </ul>
                <p>
                    <button
                        style={clearButtonShadow}
                        className='btn btn-dark btn-sm'
                        onClick={onOpenModal}
                    >
                        Edit
                    </button>
                    <button
                        style={clearButtonShadow}
                        type='button'
                        className='btn btn-danger btn-sm'
                        onClick={onDelete}
                        disabled={disabled}
                    >
                        Delete
                    </button>
                </p>
            </div>
            <Modal open={showModal} onClose={onCloseModal}>
                <div className='modal-body'>
                    <h2>Update Movie Detail</h2>
                    <form className='contact-form' onSubmit={onSubmit}>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                name='title'
                                value={movieState.title}
                                placeholder='title'
                                autoComplete='off'
                                aria-required='true'
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='number'
                                min='1900'
                                max='2099'
                                step='1'
                                className='form-control'
                                name='yearRelease'
                                value={yearRelease}
                                placeholder='Year Release'
                                required=''
                                autoComplete='off'
                                aria-required='true'
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group'>
                            <select
                                name='rate'
                                id='rate'
                                onChange={onChange}
                                value={rate}
                            >
                                <option value='G'>G</option>
                                <option value='PG'>PG</option>
                                <option value='M'>M</option>
                                <option value='MA'>MA</option>
                                <option value='R'>R</option>
                            </select>
                        </div>
                        <input
                            className='btn btn-md btn-primary btn-center'
                            id='submit'
                            type='submit'
                            value='submit'
                        />
                    </form>
                </div>
            </Modal>
        </div>
    );
};

const clearButtonShadow = {
    boxShadow: 'none',
};

export default MovieItem;
