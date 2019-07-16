import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  clickHandler = (e) => {
    this.props.cColor(e.target.style.backgroundColor)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={this.clickHandler} style={{backgroundColor: str}}/>
    })
  )

  
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
