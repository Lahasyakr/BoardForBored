import React, { Component } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css'
import LanadingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import Footer from './CommonComponents/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import SelectedGame from './Components/GameDetails.js/SelectedGame';
import Cart from './Components/Cart/cart';
import OrderDetails from './Components/Checkout/OrderDetails';

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
            <Route path='selected' Component={SelectedGame} />
            <Route path='cart' Component={Cart} />
            <Route path='checkout' Component={OrderDetails} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    );
  }
}



export default App;