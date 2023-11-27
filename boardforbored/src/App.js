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
import CardDetails from './Components/Checkout/CardDetails';
import PaymentSuccess from './Components/Checkout/PaymentSuccess';
import AboutBFB from './CommonComponents/AboutBFB';
import UserInfo from './Components/UserManagement/UserInfo';
import ManageProfile from './Components/UserManagement/ManageProfile';
import MyOrders from './Components/UserManagement/MyOrders';
import AdminHome from './Components/Admin/AdminHome';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className='max-h-full'>
          <Routes>
            <Route exact path='/' Component={LanadingPage} />
            <Route path='signUp' Component={SignUpPage} />
            <Route path='login' Component={LoginPage} />
            <Route path='dashboard' Component={Dashboard} />
            <Route path='selected' Component={SelectedGame} />
            <Route path='cart' Component={Cart} />
            <Route path='checkout' Component={OrderDetails} />
            <Route path='carddetails' Component={CardDetails} />
            <Route path='orderplaced' Component={PaymentSuccess} />
            <Route path='about' Component={AboutBFB} />
            <Route path='userinfo' Component={UserInfo} />
            <Route path='manageprofile' Component={ManageProfile} />
            <Route path='myorders' Component={MyOrders} />
            <Route path='adminHome' Component={AdminHome} />
          </Routes>
          <Footer />
        </div>

      </HashRouter>
    );
  }
}



export default App;