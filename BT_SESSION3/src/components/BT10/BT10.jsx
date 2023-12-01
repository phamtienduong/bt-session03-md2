import React, { Component } from 'react'

export default class BT10 extends Component {
  constructor() {
    super()
    this.state = {
        inputContent: "",
        showContent: ""
    }
}

handleChangeInput = (e) => this.setState({ inputContent: e.target.value })

handleClickButton = () => this.setState({ showContent: this.state.inputContent })

render() {
    return (
        <div>
            <input type="text" onChange={this.handleChangeInput} />
            <button onClick={this.handleClickButton}>Enter</button>
            <p>{this.state.showContent}</p>
        </div>
    )
}
}