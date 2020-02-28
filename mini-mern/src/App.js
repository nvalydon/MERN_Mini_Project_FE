import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>

      <Router></Router>
    </div>
  );
}

export default App;
