import * as React from 'react';
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import "./calculator.css";

class CalculatorBoard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            onClick: props.onClick
            
        }
    }
    renderSquare(txt: string) {
        return (
            <Square txt={txt} onClick={(e: Event) => this.state.onClick(e, txt)} />);
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
    constructor(props: any) {
        super(props);
        this.state = {
            equationValue: props.equationValue,
            currentOperator: null,
            prevNumber: null,
            finalResult:null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div className="main">
                <div className="equation-area row">
                    {this.state.equationValue}
                </div>
                <CalculatorBoard onClick={this.handleClick} />
                <div className="answer-area row">
                    {this.state.finalResult}
                </div>
            </div>


        );
    }
    handleClick(e: Event, txt: string) {
        let txt_numbers = Array.from({ length: 10 }, (x, i) => i).map(function (item) {
            return item.toString();
        });
        let operators = ["÷", "X", "-", "+", "%"]
        if (txt === "AC") {
            const equationValue = "0";
            this.setState({ equationValue: equationValue });

        } else if (txt == "+/-") {
            let sol = -Number.parseFloat(this.state.equationValue);
            this.setState({ equationValue: sol.toString() })
        } else if (txt === "=") {
            let sol;
            if (this.state.currentOperator === "+") {
                sol = Number.parseFloat(this.state.prevNumber)+ Number.parseFloat(this.state.equationValue);
            } else if (this.state.currentOperator === "-") {
                sol = Number.parseFloat(this.state.prevNumber) - Number.parseFloat(this.state.equationValue);
            }else if (this.state.currentOperator === "X") {
                sol = Number.parseFloat(this.state.prevNumber) * Number.parseFloat(this.state.equationValue);
            
            } else if (this.state.currentOperator === "÷") {
                sol = Number.parseFloat(this.state.prevNumber) / Number.parseFloat(this.state.equationValue);
            
            } else if (this.state.currentOperator === "%") {
                sol = Number.parseFloat(this.state.prevNumber) % Number.parseFloat(this.state.equationValue);;
            }

            this.setState({
                equationValue: sol.toString(),
                finalResult: this.state.prevNumber + " " + this.state.currentOperator + " " + this.state.equationValue + " = " + sol
            });
        }

        else if (operators.indexOf(txt) > -1) {
            this.setState({
                currentOperator: txt,
                prevNumber: this.state.equationValue,
                equationValue:"0"
            })
        }
        else if (txt_numbers.indexOf(txt) > -1) {

            let equationValue = this.state.equationValue;
            if (equationValue === "0" || equationValue==="" || equationValue==null) {
                equationValue = txt;
            } else {
                equationValue += txt;
            }
            this.setState({ equationValue: equationValue });
            
        }

        else {
            console.log("else");
        }
    }
}

class Square extends React.Component<any, any>{

    render() {
        return (
            <button
                onClick={() => this.props.onClick()}
                className={this.props.txt == "0" ? "button square col-lg-6 h-20" : "button square col-lg-3 h-100"}
            >
                {this.props.txt}
            </button>
        );
    }

}
