function convertTemperature() {
    let inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    let inputUnit = document.getElementById("inputUnit").value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(inputTemperature)) {
        alert("Please enter a valid number");
        return;
    }

    if (inputUnit === "Celsius") {
        celsius = inputTemperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Fahrenheit") {
        fahrenheit = inputTemperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Kelvin") {
        kelvin = inputTemperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("celsiusResult").innerText = celsius.toFixed(2);
    document.getElementById("fahrenheitResult").innerText = fahrenheit.toFixed(2);
    document.getElementById("kelvinResult").innerText = kelvin.toFixed(2);
}
