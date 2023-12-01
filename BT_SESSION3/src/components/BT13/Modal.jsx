import React, { Component } from 'react'

export default class Modal extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleToggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleToggle}>Toggle</button>
                </div>
                {
                    this.state.show &&
                    <div style={{ width: 500, height: 500, backgroundColor: "red" }}>Modal</div>
                }
            </div>
        )
    }
}
