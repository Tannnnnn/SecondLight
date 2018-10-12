import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/Menu' 
import Home from './pages/Home'
import About_me from './pages/About_me'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'
import Contact from './pages/Contact'
import './styles/barber.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
        <About_me />
        <Portfolio />
        <Service />
        <Contact />
      </div>
    );
  }
}

export default App;
