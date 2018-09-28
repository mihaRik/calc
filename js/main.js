let firstOperand = document.getElementById("firstOperand");
let secondOperand = document.getElementById("secondOperand");
let resultInput = document.getElementById("resultInput");

function plus() {
    result = Number(firstOperand.value) + Number(secondOperand.value);
}
function minus() {
    result = Number(firstOperand.value) - Number(secondOperand.value);
}
function multi() {
    result = Number(firstOperand.value) * Number(secondOperand.value);
}
function divide() {
    result = Number(firstOperand.value) / Number(secondOperand.value);
}
function showResult() {
    resultInput.value = result;
}