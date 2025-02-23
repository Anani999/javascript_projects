
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

let operation = document.getElementById('operation');
let answer = document.getElementById('answer');

function calculate() {
    let result;
    if(operation.value === 'Add'){
        result = Number(firstNumber.value) + Number(secondNumber.value);
    }else if(operation.value === 'Difference'){
        result = firstNumber.value - secondNumber.value;
    }else if(operation.value === 'Multiply'){
        result = firstNumber.value * secondNumber.value;
    }else if(operation.value === 'Devide'){
        result = firstNumber.value / secondNumber.value;
    }

    answer.innerHTML = `Answer : ${result}`
}