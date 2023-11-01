// JavaScript functions for the scientific calculator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        var expression = document.getElementById('display').value;
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    var inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        document.getElementById('display').value = Math.sqrt(inputValue);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSin() {
    var inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        document.getElementById('display').value = Math.sin(inputValue);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculateCos() {
    var inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        document.getElementById('display').value = Math.cos(inputValue);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculateTan() {
    var inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        document.getElementById('display').value = Math.tan(inputValue);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLastChar() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
