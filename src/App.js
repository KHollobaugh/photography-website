import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './css/index.css';
import Home from './Pages/Home';
import Navigation from './components/Navigation';
import Copyright from './components/Copyright';
import Portfolio from './Pages/Portfolio';
import Investment from './Pages/Investment';
import Contact from './Pages/Contact';

document.body.classList.add('app-background');

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />

      <Route exact path = '/' component = {Home} />
      <Route path = '/portfolio' component = {Portfolio} />
      <Route path = '/investment' component = {Investment} />
      <Route path = '/Contact' component = {Contact} />

      <Copyright />
      </div>
    );
  }
}

export default App;
