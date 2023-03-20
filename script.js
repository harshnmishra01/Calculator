let result = document.getElementById('result');

function getResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;
}
