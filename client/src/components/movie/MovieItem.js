import React, { useState, Fragment } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const MovieItem = ({ movie }) => {
    const [showModal, setModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const onOpenModal = () => {
        setModal(true);
    };

    const [movieState, setMovieState] = useState(movie);

    const { title, _id, rate, yearRelease } = movieState;

    const onCloseModal = () => {
        setModal(false);
    };

    const onChange = (e) => {
        setMovieState({ ...movieState, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className='card bg-light m-1 '>
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
                        className='btn btn-dark btn-sm'
                        // onClick={() => {
                        //     setCurrent(contact);
                        // }}
                        onClick={onOpenModal}
                    >
                        Edit
                    </button>
                    <button
                        className='btn btn-danger btn-sm'
                        // onClick={onDelete}
                    >
                        Delete
                    </button>
                </p>
            </div>
            <Modal open={showModal} onClose={onCloseModal}>
                <div className='modal-body'>
                    <h2>Update Movie Detail</h2>
                    <form className='contact-form'>
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
                            <select name='rate' id='rate' onChange={onChange}  value={rate} >
                                <option value='G'>G</option>
                                <option value='PG'>PG</option>
                                <option value='M'>M</option>
                                <option value='MA'>MA</option>
                                <option value='R'>R</option>
                            </select>
                        </div>
                        <input
                            className='btn btn-md btn-primary btn-center'
                            id='sign_up'
                            type='button'
                            value='Sign Up'
                        />
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default MovieItem;
