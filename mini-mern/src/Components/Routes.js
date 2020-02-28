import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './SignUp';

export default function Routes(){
    return(
        <Router>
            <Route exact path='/'>Root Page</Route>
            <Route exact path='/signup' component={SignUp}></Route>
        </Router>
    )
}