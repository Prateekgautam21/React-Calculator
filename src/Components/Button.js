import React, {PureComponent, Component} from 'react'
import './Button.css'

class Button extends Component {

    shouldComponentUpdate(){
        return false
    }

    clickhandler = (event) => {
        this.props.setvalueoftextarea(this.props.valueoftextarea + `${event.target.innerHTML}`)
        console.log(this.props.valueoftextarea);
    }

    render(){
        
        return (
            <div>
                    <button className="primary" onClick={this.clickhandler}>9</button>
                    <button className="primary" onClick={this.clickhandler}>8</button>
                    <button className="primary" onClick={this.clickhandler}>7</button>
                    <button className="primary" onClick={this.clickhandler}>6</button>
                    <button className="primary" onClick={this.clickhandler}>5</button>
                    <button className="primary" onClick={this.clickhandler}>4</button>
                    <button className="primary" onClick={this.clickhandler}>3</button>
                    <button className="primary" onClick={this.clickhandler}>2</button>
                    <button className="primary" onClick={this.clickhandler}>1</button>
                    <button className="primary" onClick={this.clickhandler}>0</button>
                    <button className="primary" onClick={this.clickhandler}>.</button>
            </div>
        )
    }
}

export default Button
