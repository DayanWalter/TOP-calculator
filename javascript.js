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
let operator = "";

const allClearButton = document.getElementById("allClear");
const calculatorDiv = document.getElementById("calculator");
const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const displayContent = document.getElementById("display");
const operateButton = document.getElementById("operate");

// set the display and displayValue to ""
allClearButton.addEventListener("click", function(){
    displayContent.innerHTML = "";
    a = "";
    b = "";
    operator = "";
    // a = "";
    // b = "";
});

// every button in the calculator clicked will be displayed
// OPERANDS
operandButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        displayContent.innerHTML += e.target.innerText;

        if(operator === ""){
        a += e.target.innerText;

        console.log(e.target.innerText);

        }else if (operator !== "") {
        b += e.target.innerText; 
        displayContent.innerHTML = b;

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

        // a = displayValueA;
        console.log(a);
        // b = displayValueB;
        console.log(b);


    });
});

// operate (=)
operateButton.addEventListener("click",function(){
    // displayContent.innerHTML = displayValueA;
   console.log( operate(a, operator, b));
    console.log(a);
    console.log(b);
});


// just numbers will be accepted by the keyboard
window.addEventListener('keydown', function(e){
    const numbersOnly = e.key;
        displayContent.innerHTML += numbersOnly.replace(/[^0-9]/g, "");
    console.log(e.key);
});



// console.log(addition(7,7));
// console.log(subtraction(7, 7));
// console.log(multiplication(7, 7));
// console.log(division(7,7));