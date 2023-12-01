import React, { Component } from 'react'

export default class BT9 extends Component {
   constructor() {
    super()
    this.state = {
      text: "Pham Tien Duong"
    }
  }
  changeText = () => {
    this.setState({
      text: "Duong Tien Pham"
    })
  }
  render() {
    return (
      <>
        <p>{this.state.text}</p>
        <button onClick={this.changeText}>click</button>
      </>
    )
  }
}