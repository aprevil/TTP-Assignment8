import React, {Component} from 'react';
import './TableCell.css'
class Cell extends Component{
    constructor(props){
        super(props);
        this.state={
            rows: [],
            cols: 2
        }
    }


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
    
    delRow = () =>{
        this.setState({
            rows: this.state.rows.splice(1)
        })
    }
    
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
                <button onClick={this.addRow}>Add Row</button>
                <button onClick={this.delRow}>del Row</button>
                <button onClick={this.addCol}>Add col</button>
                <button onClick={this.delCol}>del col</button>
                <table> 
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table> 
            </div>
        )
    }
}
export default Cell;
