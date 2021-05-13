import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Payment from './Payment/Payement';
import HomePage from './HomePage/HomePage'
import Header from './Header/Header'

import ListItem from './Item/ListItems';
import AddItem from './Item/AddItem';
import UpdateItem from './Item/UpdateItem';
import Checkout from './Checkout/Checkout';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path ="/items">
            <Header/>
            <ListItem/>
          </Route>
          <Route path ="/additem" component = {AddItem}>
          </Route>
          <Route path ="/updateitem/:id" component = {UpdateItem}>
          </Route>
          <Route exact path="/login">
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/payment/:subTotal" render={
            (props) => (
              <Fragment>
                <Header />
                <Payment {...props} />
              </Fragment>
            )
          }
          >
          </Route>

          <Route exact path="/">
            <Header />
            <HomePage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
