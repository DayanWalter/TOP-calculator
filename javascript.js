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
    const plus = "+";
    const minus = "-";
    const multi = "*";
    const divi = "/"
if(operator === plus){
    return addition(a, b);
}else if(operator === minus){
    return subtraction(a, b);
}else if(operator === multi){
    return multiplication(a, b)
}else if(operator === divi){
    return division(a, b);
}

};

let displayValueA = "";
let displayValueB = "";
let operator = "";

const allClearButton = document.getElementById("allClear");
const calculatorDiv = document.getElementById("calculator");
const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const displayContent = document.getElementById("display");

// set the display and displayValue to ""
allClearButton.addEventListener("click", function(){
    displayContent.innerHTML = "";
    displayValueA = "";
    displayValueB = "";
    operator = "";
});

// every button in the calculator clicked will be displayed
// OPERANDS
operandButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        displayContent.innerHTML += e.target.innerText;
        if(operator === ""){

        displayValueA += e.target.innerText;
        console.log(e.target.innerText);
        }else if (operator !== "") {
        displayValueB += e.target.innerText; 
        displayContent.innerHTML = displayValueB;
        console.log(e.target.innerText);
        
        }
    });
});

// OPERATORS
operatorButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        // displayContent.innerHTML = "";
        operator = e.target.innerText;
        console.log(e.target.innerText);
        a = displayValueA;
        console.log(a);
    });
});


// evrey button pressed will be displayed
window.addEventListener('keydown', function(e){
    const numbersOnly = e.key;
        displayContent.innerHTML += numbersOnly.replace(/[^0-9]/g, "");
    console.log(e.key);
});



// console.log(addition(7,7));
// console.log(subtraction(7, 7));
// console.log(multiplication(7, 7));
// console.log(division(7,7));