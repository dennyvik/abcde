import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPages from './pages/shop/shop.component';


function App() {
  return ( 
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} ></Route>
        <Route path='/shop' component={ShopPages} ></Route>
      </Switch>
    </div>
  );
}

export default App;
