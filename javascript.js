// START OF FUNCTIONS

// basic
const addition = function(a, b){
    return a + b;
}
const subtraction = function(a, b){
    return a - b;
}
const multiplication = function(a, b){
    return a * b;
}
const division = function(a, b){
    return Math.round(a / b*100)/100;
}

// operate
const operate = function(a, operator, b){
    if(operator === "+"){
        return addition(a, b);
    }else if(operator === "-"){
        return subtraction(a, b);
    }else if(operator === "*"){
        return multiplication(a, b)
    }else if(operator === "/"){
        return division(a, b);
    }
};

// check for operators
const checkOperator = function(e){
    // if there is no operator or "=", put the input in variable a
    if(operator === "" || operator === "="){
        a += e.target.innerText;
        displayContent.innerHTML = a;

    // if the operator is defined put the input in variable b
    }else if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        b += e.target.innerText; 
        displayContent.innerHTML = b;
    }   
};

// END OF FUNCTIONS

// initialize variables
let a = "";
let b = "";
let c = "";
let operator = "";
let result = "";

// define constants
const calculatorDiv = document.getElementById("calculator");
const displayContent = document.getElementById("display");

const allClearButton = document.getElementById("allClear");
const plusMinusButton = document.getElementById("plusMinus");
const rootButton = document.getElementById("root");

const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");

const operateButton = document.getElementById("operate");

const decimalButton = document.getElementById("decimal");


// START OF EVENTLISTENER

// set the display and displayValue to ""
allClearButton.addEventListener("click", function(){
    decimalButton.disabled = false;
    displayContent.innerHTML = "";
    a = "";
    b = "";
    c = "";
    operator = "";
    result = "";
});

// invert the display value
plusMinusButton.addEventListener("click", function(){
    if(displayContent.innerHTML === a){
        a = a * (-1) 
        displayContent.innerHTML = a;
    }else if (displayContent.innerHTML === b){
        b = b * (-1) 
        displayContent.innerHTML = b;
    }
});

// quberoot the display value
rootButton.addEventListener("click", function(){
    if(displayContent.innerHTML === a){
        a = Math.round((a ** (1/2))*1000000)/1000000
        displayContent.innerHTML = a;
    }else if (displayContent.innerHTML === b){
        b = Math.round((b ** (1/2))*1000000)/1000000
        displayContent.innerHTML = b;
    }
});

// decimal(.)
decimalButton.addEventListener("click", function(e){
    displayContent.innerHTML += e.target.innerText;
    // disable the decimal button if "." is in the display
    if(displayContent.textContent.includes(".")){
        decimalButton.disabled = true;
    }
    checkOperator(e);
});

// operands(numbers)
operandButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        displayContent.innerHTML += e.target.innerText;
        checkOperator(e);
        button.classList.add("pressedOperand");
        setTimeout(function(){
            button.classList.remove("pressedOperand")
        }, 60)
    });
});

// operators(+-*/)
operatorButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        button.classList.add("pressedOperator");
        setTimeout(function(){
            button.classList.remove("pressedOperator")
        }, 60)
        decimalButton.disabled = false;
        console.log(`Value a (${a}) ${e.target.innerText} Value b ()`);
        // if the operator is not empty & the operator is not "="
        if(operator !== "" && operator !== "="){
            result = operate(+a, operator, +b)
            displayContent.innerHTML = result;
        }
        operator = e.target.innerText;
        // if result is not empty put result in a and clear b 
        if(result !== ""){
            b = "";
            a = result;
        }
    
        console.log(`Value a = ${a}`);
        console.log(`Value b = ${b}`);
        console.log(`Value result = ${result}`);
    });
});

// operate (=)
operateButton.addEventListener("click",function(e){
    decimalButton.disabled = false;
    console.log(e.target.innerText);
    result = Math.round((operate(+a, operator, +b))*100)/100;
    displayContent.innerHTML = result;

    // add entry in history
    const list = document.createElement("li");
    const resultHistory = document.createTextNode(`${a} ${operator} ${b} = ${result}`);
    list.appendChild(resultHistory);
    const element = document.getElementById("history");
    element.appendChild(list);

    console.log(`${a} ${operator} ${b} = ${result}`);

    // division by zero is not allowed
    if(operator === "/" && b === "0"){
        displayContent.innerHTML = "NOo0o!!!";
        result = "";
    }
    operator = "=";

    console.log(`Value a = ${a}`);
    console.log(`Value b = ${b}`);
    console.log(`Value result = ${result}`);

    a = "";
    b = "";
    result = "";
});

//END OF EVENTLISTENER