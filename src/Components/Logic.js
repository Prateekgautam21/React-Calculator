import React from 'react'

export default function Logic(operandOne, operandTwo, operator) {
    if(operator == '+'){
        return (operandOne + operandTwo).toString();
    }else if(operator == '-'){
        return (operandOne - operandTwo).toString();
    }else if(operator == 'x'){
        return (operandOne * operandTwo).toString();
    }else if(operator == '÷'){
        return (operandOne / operandTwo).toString();
    }else if(operator == '%'){
        return (operandOne % operandTwo).toString();
    }
}
