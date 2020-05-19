import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPages from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';


function App() {
  return ( 
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} ></Route>
        <Route path='/shop' component={ShopPages} ></Route>
        <Route path='/sign-in' component={SignInSignUp} ></Route>
      </Switch>
    </div>
  );
}

export default App;
