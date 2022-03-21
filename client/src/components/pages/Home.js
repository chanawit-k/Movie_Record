import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import Movies from '../movie/Movies';
import InsertMovie from '../movie/InsertMovie';

const Home = (props) => {
    const userContext = useContext(UserContext);
    const { isAuthenticated } = userContext;

    useEffect( () =>{
        if (!isAuthenticated) {
            props.history.push('/login');
        }
    })
    
    return (
        <div>
            <InsertMovie />
            <Movies />
        </div>
    );
};

export default Home;
