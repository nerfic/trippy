import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Hotels from './views/Hotels';
import HotelsPage from './views/HotelsPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Trippy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" className="nav-link"> Hotel </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link"> Restaurant </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link"> Login </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link"> Sign-up </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" ><Home></Home></Route>
          <Route path="/hotels/:city"><Hotels></Hotels></Route>
          <Route path="/hotels/:id"><HotelsPage></HotelsPage></Route>
          <Route path="*"></Route>
        </Switch>
      </BrowserRouter>
    );

  }

}

export default App;
