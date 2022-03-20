import React , { useState, useContext, useEffect }  from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import MovieContext from '../../context/movie/movieContext';
const InsertMovie = () => {

    const movieContext = useContext(MovieContext);
    const { addMovie } = movieContext;

    const [showModal, setModal] = useState(false);

    const onOpenModal = () => {
        setModal(true);
    }; 

    const onCloseModal = () => {
        setModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCloseModal();
        addMovie(movieState)

    };

    const onChange = (e) => {
        setMovieState({ ...movieState, [e.target.name]: e.target.value });
    };

    const [movieState, setMovieState] = useState({
        title:'',
        yearRelease:'',
        rate:''
    });

    return (
        <div>
            <div class='col-md-12 pl-1 text-left'>
                <button
                    style={clearButtonShadow}
                    type='button'
                    class='btn btn-primary'
                    onClick={onOpenModal}
                >
                    Add Movie
                </button>
                <Modal open={showModal} onClose={onCloseModal}>
                    <div className='modal-body'>
                        <h2>Insert Movie Detail</h2>
                        <form className='contact-form' onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='title'
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
        </div>
    );
};
const clearButtonShadow = {
    boxShadow: 'none',
};

export default InsertMovie;
