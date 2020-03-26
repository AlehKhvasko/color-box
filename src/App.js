import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

  this.state =  {
    color: 'yellow',
    clickCounter: 0 
  }  
}

onChange = (e) => {
  let i = Math.floor(Math.random()*10);
  let colors = ['red','blue','green', 'purple','wheat','orange', 'black', 'yellow', 'brown', 'lightblue'];
  this.setState({
    color: colors[i],
    clickCounter: this.state.clickCounter++
  })
}
  render(){
    return (
      <div className='App'>
          <h1>Box color change</h1>
          <div className="colorBox"
          style = {{backgroundColor:this.state.color}} onClick={this.onChange} >
            <p >Click me </p>
          </div>
      </div>
    )
  }
}

