const display = document.querySelector(".calculator");
let currentDisplay = '';

function appendToDisplay(value) {
  currentDisplay += value;
  document.getElementById('result').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(currentDisplay);
    document.getElementById('result').value = result;
    currentDisplay = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentDisplay = '';
  }
}
