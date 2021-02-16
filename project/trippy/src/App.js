import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Hotels from "./views/Hotels"
import HotelsPage from "./views/HotelsPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-success ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Trippy</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Hotel</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Restaurant</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Sign-up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/hotels/:city">
            <Hotels></Hotels>
          </Route>
          <Route path="/hotels/:id">
            <HotelsPage></HotelsPage>
          </Route>
          <Route path="*">
            <p>404</p>
          </Route>
        </Switch>
      </BrowserRouter>
    );

  }

}

export default App;
