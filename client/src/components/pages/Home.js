import React, { useContext, useEffect } from 'react';
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';
import Contactfilter from '../contact/Contactfilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
    }, []);

    return (
        <div className='container'>
            home
        </div>
    );
};

export default Home;
