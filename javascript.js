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
console.log(addition(7,7));
console.log(subtraction(7, 7));
console.log(multiplication(7, 7));
console.log(division(7,7));