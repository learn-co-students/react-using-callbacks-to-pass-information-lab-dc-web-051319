import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      selectedColor: ''
    }
  }
  setSelectedColor = (newColor) => {
    console.log("set selectedColor", newColor)
   this.setState({
     selectedColor: newColor
   })
 }

  getSelectedColor = () => {
    console.log("get selectedColor")
      return this.state.selectedColor
  }

  genRow = (vals) => (
      //this is where the cell Component lies in Matrix
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
      {/*this is where the ColorSelector component lies*/}
        <ColorSelector setSelectedColor = {this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
