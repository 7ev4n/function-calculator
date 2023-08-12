function addToExpression(value) {
    const expressionInput = document.getElementById("expression");
    expressionInput.value += value;
}

function calculate() {
    const expression = document.getElementById("expression").value;
    
    try {
        const result = evaluateExpression(expression);
        document.getElementById("result").textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").textContent = "Invalid expression.";
    }
}

function evaluateExpression(expression) {
    try {
        return math.evaluate(expression);
    } catch (error) {
        throw new Error("Invalid expression.");
    }
}

function clearExpression() {
    document.getElementById("expression").value = "";
    document.getElementById("result").textContent = "Result:";
}

function deleteCharacter() {
    const expressionInput = document.getElementById("expression");
    const currentValue = expressionInput.value;
    if (currentValue.length > 0) {
        expressionInput.value = currentValue.slice(0, -1);
    }
}