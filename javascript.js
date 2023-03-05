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
const allClearButton = document.getElementById("allClear");
const calculatorDiv = document.getElementById("calculator");
const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const displayContent = document.getElementById("display");

// set the display to "0"
allClearButton.addEventListener("click", ()=> displayContent.innerHTML = "0");

// every button in the calculator clicked will be displayed
operandButtons.forEach(function(button){ 
    button.addEventListener("click", function(e){
        displayContent.innerHTML += e.target.innerText;
        console.log(e.target.innerText);
    });
});

// const addValue = function(){
//     let a = 
// }
// evrey button pressed will be displayed
window.addEventListener('keydown', function(e){
    displayContent.innerHTML += e.key;
    console.log(e.key);
});



console.log(addition(7,7));
console.log(subtraction(7, 7));
console.log(multiplication(7, 7));
console.log(division(7,7));