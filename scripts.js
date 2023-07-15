function convertTemperatures() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var resultText = document.getElementById("resultText");

  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsius)) {
    var convertedFahrenheit = (celsius * 9) / 5 + 32;
    resultText.textContent =
      celsius +
      " Celsius is equal to " +
      convertedFahrenheit.toFixed(2) +
      " Fahrenheit.";
  } else if (!isNaN(fahrenheit)) {
    var convertedCelsius = ((fahrenheit - 32) * 5) / 9;
    resultText.textContent =
      fahrenheit +
      " Fahrenheit is equal to " +
      convertedCelsius.toFixed(2) +
      " Celsius.";
  } else {
    resultText.textContent = "Please enter a valid temperature.";
  }
}

function resetForm() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("resultText").textContent = "";
}