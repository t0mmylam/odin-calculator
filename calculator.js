function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(o, a, b) {
    console.log('Operater: '+o+" A: "+a+" B: "+b)
    if (o == 1) {
        console.log('Add: ' + a + " & " + b);
        return a + b;
    }
    if (o == 2) {
        console.log('Subtract: ' + a + " & " + b);
        return a - b;
    }
    if (o == 3) {
        console.log('Multiply: ' + a + " & " + b);
        return a * b;
    }
    if (o == 4) {
        console.log('Divide: ' + a + " & " + b);
        let temp = a/b;
        if (temp.toString().length>10) {
            temp = temp.toString().substring(1, 11);
        }
        return parseFloat(temp);
        console.log(parseFloat(temp));
    }
    if (o == 5) {
        console.log('Modulus: ' + a + " & " + b);
        return a % b;
    }
}

function print(cur, num) {
    if (cur == 0 & num == 0) {
        return 0;
    }
    let newNum = parseInt("" + cur + "" + num);
    if (newNum.toString().length > 11) {
        return cur;
    }
    return newNum;
}

let current = 0;
let number1 = 0;
let number2 = 0;
let operator = 0;
const display = document.querySelector('.display');

function editnumone() {
    console.log(current);
    number1 = print(number1, current)
    display.textContent = number1;
}

function editnumtwo() {
    console.log('x: ' + current);
    number2 = print(number2, current)
    display.textContent = number2;
}

const numButtons = document.querySelectorAll('.num');
Array.from(numButtons).forEach(num => {
    num.addEventListener('click', () => {
        current = num.id;
    });
});
Array.from(numButtons).forEach(num => {
    num.addEventListener('click', editnumone);
});


function clearOthers() {
    const operators = document.querySelectorAll('.o');
    Array.from(operators).forEach(o => {
        o.classList.remove('selected');
    });
}


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    number1 = 0;
    number2 = 0;
    operator = 0;
    clearOthers();
    display.textContent = number1;
    Array.from(numButtons).forEach(num => {
        num.removeEventListener('click', editnumtwo);
        num.addEventListener('click', editnumone);
    });
});

const neg = document.querySelector('#plusminus');

neg.addEventListener('click', () => {
    display.textContent = display.textContent * -1;
    number1 *= -1;
});

const operators = document.querySelectorAll('.o');
operators.forEach(o => {
    o.addEventListener('click', function () {
        clearOthers();
        operator = o.id;
        console.log(operator);
        o.classList.add('selected');
        Array.from(numButtons).forEach(num => {
            num.removeEventListener('click', editnumone);
            num.addEventListener('click', editnumtwo);
        });
    });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function () {
    clearOthers();
    number1 = operate(operator, number1, number2);
    console.log(number1);
    display.textContent = number1;
    number2 = 0;
});