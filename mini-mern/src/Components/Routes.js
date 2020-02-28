import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from "./Footer";

export default function Routes() {
    return (
        <Router>
            <Route exact path='/' component={SignIn}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Footer></Footer>

        </Router>
    )
}