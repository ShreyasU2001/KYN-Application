import React from 'react';
import logo from './logo.svg';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStoreComponent from './components/ListStoreComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStoreComponent from './components/CreateStoreComponent';
import ViewStoreComponent from './components/ViewStoreComponent';
import ListSearchStoreComponent from './components/ListSearchStoreComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';

import Dashboard from './components/Dashboard';
import useState from 'react';


import LoginComponent from './components/LoginComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ContactUs from './components/ContactUs';
import TermsAndConditions from './components/TermsAndConditions';
import FbDataComponent from './components/FbDataComponent';
function App() {

  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 

                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/home" exact component = {HomeComponent}></Route>
                          <Route path = "/fbdata" exact component = {FbDataComponent}></Route>
                          <Route path = "/stores" component = {ListStoreComponent}></Route>
                          <Route path = "/add-store/:id" component = {CreateStoreComponent}></Route>
                          <Route path = "/view-store/:id" component = {ViewStoreComponent}></Route>
                          <Route path = "/search-stores/:searchKeyword" component = {ListSearchStoreComponent}></Route>
                          <Route path = "/register" component = {RegisterComponent}></Route>
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/dash" component = {Dashboard}></Route>
                          <Route path = "/about" component = {AboutUsComponent}></Route>
                          <Route path = "/contact" component = {ContactUs}></Route>
                          <Route path = "/terms" component = {TermsAndConditions}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;