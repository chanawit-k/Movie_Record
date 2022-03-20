import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import './App.css';

function App() {
    return (
        <MovieState>
            <UserState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <div className='container-fluid'>
                                <Alerts />
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route
                                        exact
                                        path='/login'
                                        component={Login}
                                    />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </UserState>
        </MovieState>
    );
}

export default App;
