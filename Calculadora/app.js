let expression = '';

function updateDisplay(value) {
  document.getElementById('result').textContent = value;
}

function updateExpression(value) {
  document.getElementById('expression').textContent = value;
}

function appendValue(value) {
  expression += value;
  updateExpression(expression);
}

function clearAll() {
  expression = '';
  updateDisplay('0');
  updateExpression('');
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateExpression(expression);
  if (expression === '') updateDisplay('0');
}

function calculate() {
  try {
    const result = eval(expression);
    updateDisplay(result);
    updateExpression(expression + ' =');
    expression = String(result);
  } catch (error) {
    updateDisplay('Erro');
    expression = '';
  }
}