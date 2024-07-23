function calculate() {
    var generatorPower = parseFloat(document.getElementById("generator").value);
    var loadPower = parseFloat(document.getElementById("load").value);
    var lineLength = parseFloat(document.getElementById("lineLength").value);
    var lineResistance = parseFloat(document.getElementById("lineResistance").value);

    // Calculate total power
    var totalPower = generatorPower - loadPower;

    // Calculate power loss in transmission line
    var current = totalPower / 2;
    var powerLoss = lineResistance * lineLength * Math.pow(current, 2);

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Total Power: " + totalPower + " MW<br>" +
                               "Power Loss in Transmission Line: " + powerLoss.toFixed(2) + " MW";
}
