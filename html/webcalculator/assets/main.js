const calculator = {
    displayNumber: "0",
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

//update display
function updateDisplay(){
    document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
};

//clear all data
function clearCalculator(){
    calculator.displayNumber = "0";
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
};

//add data to calculator displayNumber
function inputDigit(digit){
    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber){
        calculator.displayNumber = digit;
    } else {
        if (calculator.displayNumber === "0") {
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
}

//negatif number
function inverseNumber(){
    if (calculator.displayNumber === "0"){
        return;
    }
    calculator.displayNumber *= -1;
}

//operator
function handleOperator(operator){
    if (!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
    } else {
        alert("operator sudah ditetapkan");
    }
}

//perform calculation
function performCalculaion(){
    if (calculator.firstNumber == null || calculator.operator == null){
        alert("anda belum menetapkan operator");
        return;
    }
    let result = 0;
    if  (calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}

//if click button
const buttons = document.querySelectorAll(".button");
for (button of buttons){
    button.addEventListener("click", function(event){

        //for get element object that clicked
        const target = event.target;
        
        //clear  all data if clicked
        if (target.classList.contains("clear")){
            clearCalculator();
            updateDisplay();
            return;
        }

        //negative number
        if (target.classList.contains("negative")){
            inverseNumber();
            updateDisplay();
            return;
        }

        //equals
        if (target.classList.contains("equals")){
            performCalculaion();
            updateDisplay();
            return;
        }

        //operator
        if (target.classList.contains("operator")){
            handleOperator(target.innerText);
            updateDisplay();
            return;
        }

        //call some function
        inputDigit(target.innerHTML);
        updateDisplay();
    })
}