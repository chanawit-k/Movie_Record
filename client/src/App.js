import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import ContactState from './context/contact/ContactState';
import UserState from './context/user/UserState';
import AuthtState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import './App.css';

function App() {
    return (
        <AuthtState>
            <MovieState>
            <ContactState>
                <UserState>
                    <AlertState>
                        <Router>
                            <Fragment>
                                <Navbar />
                                <div className='container-fluid'>
                                    <Alerts />
                                    <Switch>
                                        <Route
                                            exact
                                            path='/'
                                            component={Home}
                                        />
                                        <Route
                                            exact
                                            path='/about'
                                            component={About}
                                        />
                                        <Route
                                            exact
                                            path='/register'
                                            component={Register}
                                        />
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
            </ContactState>
            </MovieState>
        </AuthtState>
    );
}

export default App;
