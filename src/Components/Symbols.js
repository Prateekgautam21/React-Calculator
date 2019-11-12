import React, {Component, PureComponent} from 'react'
import './Symbols.css'
import Logic from "./Logic";

class Symbols extends Component {

    symbolClicked = '';
    previoussymobolclicked = '';

    shouldComponentUpdate(){
        return false
    }

    clickhandler = (event) => {
        
        let {firstvalueoftextarea, secondvalueoftextarea, setfirstvalueoftextarea, setsecondvalueoftextarea} = this.props;

        this.symbolClicked = event.target.innerHTML;

        if(this.symbolClicked == 'AC'){
            setfirstvalueoftextarea('');
        }
        else if((this.symbolClicked == '÷') || (this.symbolClicked == 'x') || (this.symbolClicked == '+') || (this.symbolClicked == '-') || (this.symbolClicked == '%') ){
            this.previoussymobolclicked = this.symbolClicked;
            this.symbolClicked = '';
            setsecondvalueoftextarea(firstvalueoftextarea);
            setfirstvalueoftextarea('');
        }
        else if(this.symbolClicked == '+/-'){
            if(firstvalueoftextarea[0] != '-'){
                setfirstvalueoftextarea('-'+firstvalueoftextarea);
            }else{
                setfirstvalueoftextarea(firstvalueoftextarea.substring(1));
            }
        }
        else if(this.symbolClicked == '='){
            if(firstvalueoftextarea == '' || secondvalueoftextarea == ''){
            }else{
                var Result = Logic(parseFloat(secondvalueoftextarea),parseFloat(firstvalueoftextarea),this.previoussymobolclicked);
                setfirstvalueoftextarea(Result);
            }
        }

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
