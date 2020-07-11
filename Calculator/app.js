function obtainNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
}

function resultClear() {
    var result = document.getElementById("result");
    result.value = "";
}

function resultCalculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}