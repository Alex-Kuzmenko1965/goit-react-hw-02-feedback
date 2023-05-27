// import './App.css';
import React, { Component } from 'react';
// import { ProfileCard } from './components/ProfileCard/ProfileCard';
// import user from './components/Data/user.json';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  
  handleIncrement = (event) => {    
    // console.log(event.target.name);
    const name = event.target.name;
    console.log(name);
    if (name === "good") {
      this.setState((prevState) => ({
      good: (prevState.good += 1),        
    }));} 
    if (name === "bad") {
      this.setState((prevState) => ({
      bad: (prevState.bad += 1),        
    }));}
    if (name === "neutral") {
      this.setState((prevState) => ({
      neutral: (prevState.neutral += 1),        
    }));
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    console.log(total);
    const positivePercentage = (good / total).toFixed(2);
    console.log(positivePercentage);    

  return (
    <>
    <h1>Please leave feedback</h1>
    <button name = "good"  onClick={this.handleIncrement}>Good</button>
    <button name = "neutral" onClick={this.handleIncrement}>Neutral</button>
    <button name = "bad" onClick={this.handleIncrement}>Bad</button>
    <h2>Statistics</h2>    
  
  {(positivePercentage > 0) ? (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </>
  ) : <p>There is no feedback</p>}      
    </>
      
  );}
}
