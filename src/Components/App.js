import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Payment from './Payment/Payement';
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <Router>

      <div className="main-container">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/payment" component={Payment}></Route>
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
          </ul>
        </nav>
      </div>

    </Router>
  );
}

export default App;
