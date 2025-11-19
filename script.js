let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculateResult() {
    try {
        let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);

        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(8));
        }

        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => { clearDisplay(); }, 1500);
    }
}

// Keyboard support (optional but cool)
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendToDisplay(e.key);
    if (e.key === '.') appendToDisplay('.');
    if (e.key === '+') appendToDisplay('+');
    if (e.key === '-') appendToDisplay('-');
    if (e.key === '*') appendToDisplay('*');
    if (e.key === '/') appendToDisplay('/');
    if (e.key === 'Enter') calculateResult();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});