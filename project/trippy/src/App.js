import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Hotels from "./views/Hotels"
import HotelsPage from "./views/HotelsPage";
import NavBar from "./components/NavBar"

class App extends React.Component {
  render() {
    return (
      <NavBar />
    );

  }

}

export default App;
