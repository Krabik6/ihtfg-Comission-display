import React, { Component } from 'react'

export default class DataComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'den'
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
         name: 'Remberkl'

        })
    }


  render() {
    return (
      <div>
          <h1>{ this.state.name } </h1>
          <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

// DataComponent.defaultProps = {name: "levachka"}