import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Image from "./components/Image";
import Images from "./components/Images.json"

import archer from "./images/archer.jpg"
import bear from "./images/bear.jpg"
import bravo from "./images/bravo.jpg"
import homer from "./images/homer.jpg"
import peter from "./images/peter.jpg"
import scooby from "./images/scooby.jpg"
import simpsons from "./images/simpsons.jpg"
import southpark from "./images/southpark.jpg"
import spongebob from "./images/spongebob.jpg"
import stewie from "./images/stewie.jpg"
import stoner from "./images/stoner.jpg"
import wiley from "./images/wiley.jpg"

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Main />
            <Image  />
      </div>
    );
  }
}

export default App;
