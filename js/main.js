let firstOperand = document.getElementById("firstOperand");
let secondOperand = document.getElementById("secondOperand");
let operation = document.getElementById("operation");

function getOperands() {
    firstOperand = firstOperand.value;
    secondOperand = secondOperand.value;
}
function plus() {
    getOperands();
    result = firstOperand + secondOperand;
}
function minus() {
    getOperands();
    result = firstOperand - secondOperand;
}
function multi() {
    getOperands();
    result = firstOperand * secondOperand;
}
function divide() {
    getOperands();
    result = firstOperand / secondOperand;
}

function result() {
    result = document.getElementById("result").value;
}