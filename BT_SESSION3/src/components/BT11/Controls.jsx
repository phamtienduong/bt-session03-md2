import React, { Component } from 'react'

export default class Controls extends Component {
  constructor(props) {
    super(props)
}

render() {

    const { handleChangeTextSearch, handleSearch, handleChangeSelect } = this.props

    return (
        <div>
            <input type="text" onChange={handleChangeTextSearch} />
            <button onClick={handleSearch}>Search</button>
            <select onChange={handleChangeSelect}>
                <option value="nomal">Nomal</option>
                <option value="asc">Up</option>
                <option value="desc">Down</option>
            </select>
        </div>
    )
}
}
