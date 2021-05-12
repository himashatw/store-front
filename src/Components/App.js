import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Payment from './Payment/Payement';
import HomePage from './HomePage/HomePage'
import Header from './Header/Header'
import ListItem from './Item/ListItems';
import AddItem from './Item/AddItem';
import UpdateItem from './Item/UpdateItem';


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
          </Route>

          <Route exact path="/payment">
            <Header />
            <Payment />
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
