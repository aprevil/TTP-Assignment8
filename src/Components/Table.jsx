import React, { Component } from 'react';
  
import TableCell from './TableCell.jsx';

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

  render() {
    const color = this.state.color;
    return (
      <div>
        <button onClick={this.selectRed}>Red</button>
        <button onClick={this.selectGreen}>Green</button>
        <button onClick={this.selectBlue}>Blue</button>
        <p>Color selected: {this.state.color}</p>
        <TableCell color={this.state.color}/>
      </div>
    )
  }
}

export default Table;
