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
const plusMinusButton = document.getElementById("plusMinus");

// plusMinusButton.addEventListener("click", function(){
//     if(displayContent.innerHTML === result){
//         result = result * (-1);
//         displayContent.innerHTML = result
//     }else if(displayContent.innerHTML === a){
//         a = a * (-1);
//         displayContent.innerHTML = a
//     }else if(displayContent.innerHTML === b){
//         b = b * (-1);
//         displayContent.innerHTML = b

//     }
    

// })
// set the display and displayValue to ""
allClearButton.addEventListener("click", function(){
    displayContent.innerHTML = "";
    a = "";
    b = "";
    c = "";
    operator = "";
    result = "";
});

// every button in the calculator clicked will be displayed
// OPERANDS(numbers)
operandButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){

        // display every number in the display
        displayContent.innerHTML += e.target.innerText;

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
    });
});

// OPERATORS(+-*/)
operatorButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        console.log(e.target.innerText);

        if(operator !== "" && operator !== "="){
            result = operate(+a, operator, +b)
            displayContent.innerHTML = result;
        }
        operator = e.target.innerText;
        // if result is not empty put the value in a and clear b 
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
    console.log(e.target.innerText);

    result = Math.round((operate(+a, operator, +b))*100)/100;
    
    
    displayContent.innerHTML = result;

    operator = "=";
    if(operator === "=" && b === "0"){
        displayContent.innerHTML = "NOo0o!!!";
        result = "";
    }
    a = "";
    b = "";

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