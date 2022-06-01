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
    return a/b;
}

function operate(o, a, b) {
    switch(o) {
        case 1:
            return add(a, b);
        case 2:
            return subtract(a, b);
        case 3:
            return multiply(a, b);
        case 4:
            return divide(a, b);
    }
}

function print(cur, num) {
    if (cur == 0 & num == 0) {
        return 0;
    }
    let newString = ""+cur+""+num;
    console.log(newString);
    if (newString.length > 11) {
        return cur;
    }
    return parseInt(newString);
}

let number = 0;
const display = document.querySelector('.display');
display.textContent = number.toString();

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(num => num.addEventListener('click', () => {
    number = print(number, num.id);
    display.textContent = number;
}))

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    number = 0;
    display.textContent = number;
})
