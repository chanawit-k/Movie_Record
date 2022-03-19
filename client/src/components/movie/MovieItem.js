import React, { useState, Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const MovieItem = ({ movie }) => {
    const { title, _id, rate, yearRelease } = movie;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className='card bg-light m-1'>
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
            
        </div>
    );
};

export default MovieItem;
