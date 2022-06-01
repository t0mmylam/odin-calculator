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