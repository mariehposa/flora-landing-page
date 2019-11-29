import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Display from './Components/Display/Display';
import Box from './Components/Box/Box';
import Testimony from './Components/Testimony/Testimony';
import Footertop from './Components/Footertop/Footertop';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
        <Box />
        <Testimony />
        <Footertop />
        <Footer />
      </div>
    );
  }
}

export default App;