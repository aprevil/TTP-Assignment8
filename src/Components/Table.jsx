import React, { Component } from 'react';
  
import TableCell from './TableCell.jsx';
import './TableCell.css'

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.selectRed = this.selectRed.bind(this);
    this.selectGreen = this.selectGreen.bind(this);
    this.selectBlue = this.selectBlue.bind(this);
    //this.handleClick = this.handleClick.bind(this);

    this.state = {color: ""};
  }

  selectRed() {
    this.setState({color: "red"});
  }

  selectGreen() {
    this.setState({color: "green"});
  }
selectBlue() {
    this.setState({color: "blue"});
  }
  changeColor = (e) =>{
    if(e.target.value === "red") this.selectRed()
    else if(e.target.value === "green") this.selectGreen()
    else this.selectBlue()
  }

  render() {
    const color = this.state.color;
    return (
      <div id = "page">
        <h1>Grid Maker</h1>
        <div id = "nav">
          <p><strong>Color selected: {this.state.color}</strong></p>
            <select   id = "drop" style={{backgroundColor:this.state.color}} onChange = {this.changeColor}>
              <option value = "red">red</option>
              <option value = "green">green</option>
              <option value = "blue">blue</option>
            </select>
        </div>
        <TableCell color={this.state.color}/>
      </div>
    )
  }
}

export default Table;
