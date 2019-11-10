import React, { Component } from 'react'
import './Symbols.css'
import './Stylingmodule.css'
import Logic from "./Logic";

class Symbols extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             symbolClicked: '',
             previoussymobolclicked: ''
        }
    }
    
    clickhandler = (event) => {
        
        let {firstvalueoftextarea, secondvalueoftextarea, setfirstvalueoftextarea, setsecondvalueoftextarea} = this.props;

        this.setState({
            symbolClicked: event.target.innerHTML
        },
        () => {

            if(this.state.symbolClicked == 'AC'){
                setfirstvalueoftextarea('');
                console.log(' AC ran');
            }
            else if((this.state.symbolClicked == '÷') || (this.state.symbolClicked == 'x') || (this.state.symbolClicked == '+') || (this.state.symbolClicked == '-') || (this.state.symbolClicked == '%') ){
                this.setState({
                    previoussymobolclicked: this.state.symbolClicked,
                    symbolClicked: ''
                },()=>{
                    setsecondvalueoftextarea(firstvalueoftextarea);
                    setfirstvalueoftextarea('');
                })
            }
            else if(this.state.symbolClicked == '+/-'){
                if(firstvalueoftextarea[0] != '-'){
                    setfirstvalueoftextarea('-'+firstvalueoftextarea);
                    console.log(firstvalueoftextarea);
                }else{
                    setfirstvalueoftextarea(firstvalueoftextarea.substring(1));
                    console.log(firstvalueoftextarea);
                }
            }
            else if(this.state.symbolClicked == '='){
                if(firstvalueoftextarea == '' || secondvalueoftextarea == ''){
                }else{
                    var Result = Logic(parseFloat(secondvalueoftextarea),parseFloat(firstvalueoftextarea),this.state.previoussymobolclicked);
                    setfirstvalueoftextarea(Result);
                }
            }
        })
    }

    render() {
        return (
            <div>
                <div className="arithmeticsymbols">
                    <button className="secondary" onClick={this.clickhandler}>÷</button>
                    <button className="secondary" onClick={this.clickhandler}>x</button>
                    <button className="secondary" onClick={this.clickhandler}>+</button>
                    <button className="secondary" onClick={this.clickhandler}>-</button>  
                    <button className="secondary" onClick={this.clickhandler}>=</button>
                </div>
                <div className="functionalsymbols">
                    <button className="secondary" onClick={this.clickhandler}>AC</button>
                    <button className="secondary" onClick={this.clickhandler}>+/-</button>
                    <button className="secondary" onClick={this.clickhandler}>%</button>
                </div>
            </div>
        )
    }
}

export default Symbols
