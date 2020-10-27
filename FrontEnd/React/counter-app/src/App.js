import React from 'react'
import "./App.css";
import Button from "./components/ButtonComponent/Button";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }


  setCounter = (number) => {
    this.setState({counter: this.state.counter + number})
  }


  render() {
    return(
      <div className="App">
        <h1>React State Counter</h1>
        <div className = "counterContainer">
          {this.state.counter}
        </div>
        <div className = "buttonsContainer">
          <Button number = {8} counterFunction ={this.setCounter}/>
          <Button number = {15} counterFunction ={this.setCounter}/>
          <Button number = {128} counterFunction ={this.setCounter}/>
        </div>
      </div>
    );
  }
}

export default App;
