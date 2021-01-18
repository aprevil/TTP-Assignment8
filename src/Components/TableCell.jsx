import React, {Component} from 'react';
import './TableCell.css'
class Cell extends Component{
    constructor(props){
        super(props);
        this.state={
            rows: [],
            cols: 2,
            colorSelected: ""
        }
    }

    //adds rows to grid
    addRow = () =>{
        let col =[];
        if(this.state.cols < 2){
            this.setState({
                rows: [...this.state.rows, <tr><td></td></tr>]
            })
        }
        else{
            for(let i = 0;i<this.state.cols-1;i++){
                col.push(<td></td>)
            }
            this.setState({
                rows: [...this.state.rows, <tr>{col}</tr>]
            })
        }
    }
    //removes rows from grid
    delRow = () =>{
        this.setState({
            rows: this.state.rows.splice(1)
        })
    }
    //adds columns to grid
    addCol = () =>{
        this.setState({
            cols: this.state.cols+1
        })
        let table = this.state.rows;

        let col = [];
        console.log(this.state.cols)
        
        for(let j = 0; j<this.state.cols;j++){
            col.push(<td></td>);
        }
        for(let i = 0; i<table.length;i++){
            table[i] = <tr>{col}</tr>;
        }
        this.setState({
            rows: table
        })
    }
    //removes columns from grid
    delCol = () =>{
        if(this.state.cols>0){

            let table = this.state.rows;
            let newCol = this.state.cols-1;
            console.log(newCol+" "+this.state.cols)
            let col = [];
            for(let j = 0; j<newCol-1;j++){
                col.push(<td></td>);
            }
            for(let i = 0; i<table.length;i++){
                table[i] = <tr>{col}</tr>;
            }
            this.setState({
                rows: table,
                cols: this.state.cols-1
            })
        }
    }

    render(){
        return(
            <div>
                <div id = "rowBtns">
                    <button className ="addBtn" onClick={this.addRow}>Add Row</button>
                    <button className ="delBtn" onClick={this.delRow}>delete Row</button>
                    <button className ="addBtn" onClick={this.addCol}>Add column</button>
                    <button className ="delBtn" onClick={this.delCol}>delete column</button>
                </div>
                <table> 
                    <tbody id = "center" style={{backgroundColor: this.props.color}}>
                        {this.state.rows}
                    </tbody>
                </table> 
            </div>
        )
    }
}
export default Cell;
