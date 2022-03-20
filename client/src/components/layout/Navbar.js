import React , { Fragment  , useContext }  from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../../context/user/userContext';

const Navbar = ({ title, icon }) => {
    const userContext = useContext(UserContext);
    const { isAuthenticated, logout, user } = userContext;

    const onLogout = () =>{
      logout()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.roleName}</li>
            <li>
                <Link onClick={onLogout} to='/login'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1 className='m-0'>
                <i className={icon} /> {title}
            </h1>
            <ul className='m-0' >{isAuthenticated ? authLinks : guestLinks}</ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Movie Record',
    icon: 'fas fa-solid fa-film',
};

export default Navbar;
