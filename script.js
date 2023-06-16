/*
data attributes is used in javascript instead of classes
bcoz it's easier to see what parts of HTML are being used by
JavaScript and which parts are used by actual CSS.
*/


class Calculator{
    constructor(previousOperand,currentOperand){
        this.previousOperand=previousOperand
        this.currentOperand=currentOperand
        this.clear()
    }

    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation= undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }

}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons= document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperand, currentOperand)
numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

resume @ 20:42