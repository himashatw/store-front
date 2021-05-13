import React, { Fragment, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Payment from './Payment/Payement';
import HomePage from './HomePage/HomePage'
import Header from './Header/Header'
import { auth } from '../services/firebase'
import ListItem from './Item/ListItems';
import AddItem from './Item/AddItem';
import UpdateItem from './Item/UpdateItem';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';



function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          {
            type: "SET_USER",
            user: authUser
          }
        )
      } else {
        dispatch(
          {
            type: "SET_USER",
            user: null,
            basket : []
          }
        )
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  console.log('USer iS',user);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/items">
            <Header />
            <ListItem />
          </Route>
          <Route path="/additem" component={AddItem}>
          </Route>
          <Route path="/updateitem/:id" component={UpdateItem}>
          </Route>
          <Route exact path="/login">
            <Login />
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
