import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import Movies from '../movie/Movies';
import InsertMovie from '../movie/InsertMovie';

const Home = () => {
    const userContext = useContext(UserContext);
    const { isAuthenticated } = userContext;
    
    return (
        <div>
            <InsertMovie />
            <Movies />
        </div>
    );
};

export default Home;
