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

let a = "";
let b = "";
let c = "";
let operator = "";
let result = "";

const allClearButton = document.getElementById("allClear");
const calculatorDiv = document.getElementById("calculator");
const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const displayContent = document.getElementById("display");
const operateButton = document.getElementById("operate");
const decimalButton = document.getElementById("decimal");
const plusMinusButton = document.getElementById("plusMinus");

// plusMinusButton.addEventListener("click", function(e){
//     displayContent.innerHTML = e*(-1);
// })


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

const checkOperator = function(e){
    // if there is no operator or "=", put the input in variable a
    if(operator === "" || operator === "="){
        a += e.target.innerText;
        displayContent.innerHTML = a;
        console.log(e.target.innerText);

    // if the operator is defined put the input in variable b
    }else if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        b += e.target.innerText; 
        displayContent.innerHTML = b;
        console.log(e.target.innerText);
    }   
}
// DECIMAL(.)
decimalButton.addEventListener("click", function(e){
    // display every number in the display
    displayContent.innerHTML += e.target.innerText;
    // disable the decimal button if "." is in the display
    if(displayContent.textContent.includes(".")){
        decimalButton.disabled = true;
    }
    checkOperator(e);
});

// OPERANDS(numbers)
operandButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        // display every number in the display
        displayContent.innerHTML += e.target.innerText;
        checkOperator(e);
    });
});

// OPERATORS(+-*/)
operatorButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        decimalButton.disabled = false;
        console.log(e.target.innerText);
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
    // enable decimal button
    decimalButton.disabled = false;
    console.log(e.target.innerText);
    // round the result
    result = Math.round((operate(+a, operator, +b))*100)/100;
    // display the result
    displayContent.innerHTML = result;
    operator = "=";
    // division by zero
    if(operator === "=" && b === "0"){
        displayContent.innerHTML = "NOo0o!!!";
        result = "";
    }
    // set a, b and result to ""
    a = "";
    b = "";
    result = "";
    console.log(`Value a = ${a}`);
    console.log(`Value b = ${b}`);
    console.log(`Value result = ${result}`);

});


// just numbers will be accepted by the keyboard
window.addEventListener('keydown', function(e){
    const numbersOnly = e.key;
        displayContent.innerHTML += numbersOnly.replace(/[^0-9]/g, "");
    console.log(e.key);
});