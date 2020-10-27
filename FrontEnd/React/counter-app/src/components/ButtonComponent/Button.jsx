import React, { Component } from "react";
import "./Button-style.css";

export default class FirstButton extends Component {
  constructor(props) {
    super();
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    this.setState({ number: this.props.number });
  }

  render() {
    const addCount = this.props.counterFunction;

    return (
      <div className="container">
        <button
          className="firstButton"
          onClick={() => {
            if(!isNaN(this.state.number)) addCount(this.state.number)
          }
        }>
          ADD <b>{this.state.number}</b>
        </button>
        <input
          onChange={(e) => {this.setState({ number: Number.parseInt(e.target.value) })}}
          placeholder="Enter your number fo button"
        />
      </div>
    );
  }
}
