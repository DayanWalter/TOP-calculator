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
console.log(addition(5,6));
console.log(subtraction(5, 6));
console.log(multiplication(5, 6));
console.log(division(5,6));