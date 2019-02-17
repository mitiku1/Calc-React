import * as React from 'react';
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./calculator.css";

class CalculatorBoard extends React.Component<any, any>{
    renderSquare(txt:string) {
        return(
            < Square txt={txt} />);
    }
    render() {
        return (
            <div>

                <div className="row">
                    {this.renderSquare("AC")}
                    {this.renderSquare("+/-")}
                    {this.renderSquare("%")}
                    {this.renderSquare("÷")}
                </div>
                <div className="row">
                    {this.renderSquare("7")}
                    {this.renderSquare("8")}
                    {this.renderSquare("9")}
                    {this.renderSquare("X")}
                </div>
                <div className="row">
                    {this.renderSquare("4")}
                    {this.renderSquare("5")}
                    {this.renderSquare("6")}
                    {this.renderSquare("-")}
                </div>
                <div className="row">
                    {this.renderSquare("1")}
                    {this.renderSquare("2")}
                    {this.renderSquare("3")}
                    {this.renderSquare("+")}
                </div>
                <div className="row">
                    {this.renderSquare("0")}
                    {this.renderSquare(".")}
                    {this.renderSquare("=")}
                </div>

            </div>
        );
    }
}


export class Calculator extends React.Component<any, any>{
    
    render() {
        return (
      
            <>
            <div className="equation-area row">
                {this.props.equationValue}
            </div>
            <CalculatorBoard/>
            </>
            
        );
    }
    
}
class EquationArea extends React.Component<any, any>{
    
    render() {
        return (
            <div>

            </div>
        );
    }
}
class Square extends React.Component<any, any>{
    
    render() {
        return (
            <button className={this.props.txt == "0" ?"button square col-lg-6 h-20":"button square col-lg-3 h-100"}>
                {this.props.txt}
            </button>
        );
    }
}