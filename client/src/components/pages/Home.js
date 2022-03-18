import React, { useContext, useEffect  } from 'react';
import { useHistory} from 'react-router-dom'
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';
import Contactfilter from '../contact/Contactfilter';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';
const Home = () => {
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext) 
    const {  isAuthenticated  } = userContext;
    const history = useHistory();
    useEffect(() => {
        if(!isAuthenticated){
            history.push("/login")
        }
    }, [isAuthenticated ]);

    return (
        <div className='container'>
            <Contacts />
        </div>
    );
};

export default Home;
