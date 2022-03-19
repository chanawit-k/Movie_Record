import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import Movies from '../movie/Movies';
import { modal } from 'react-bootstrap'; 

const Home = () => {
    const userContext = useContext(UserContext);
    const { isAuthenticated } = userContext;
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         history.push('/login');
    //     }
    // }, [isAuthenticated]);

    return <div>
        <Movies /> 
    </div>;
};

export default Home;
