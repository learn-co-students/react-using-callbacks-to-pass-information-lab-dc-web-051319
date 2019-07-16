import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  updateColor = (e) => {
    console.log(this.props.cColor())
    e.currentTarget.style.backgroundColor = `${this.props.cColor()}`
  }
  
  render() {
    return (
      <div onClick={this.updateColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
