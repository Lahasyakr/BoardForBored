import React, { Component } from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import LanadingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import Footer from './CommonComponents/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Routes>
            <Route exact path='/' Component={LanadingPage} />
            <Route path='signUp' Component={SignUpPage} />
            <Route path='login' Component={LoginPage} />
            <Route path='dashboard' Component={Dashboard} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Footer/>
      </HashRouter>
    );
  }
}



export default App;