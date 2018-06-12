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
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image!'
  };


  shuffleArray = (array) => {
    let imgArray = Images;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        correct: 0,
        picked: [],
        message: "Wrong!"
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "archer":
        return `${archer}`
      case "bear":
        return `${bear}`
      case "bravo":
        return `${bravo}`
      case "homer":
        return `${homer}`
      case "peter":
        return `${peter}`
      case "scooby":
        return `${scooby}`
      case "simpsons":
        return `${simpsons}`
      case "southpark":
        return `${southpark}`
      case "spongebob":
        return `${spongebob}`
      case "stewie":
        return `${stewie}`
      case "stoner":
        return `${stoner}`
      case "wiley":
        return `${wiley}`
      default:
        return `${archer}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Jumbotron />
        <Main>
          {this.shuffleArray(Images).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;
