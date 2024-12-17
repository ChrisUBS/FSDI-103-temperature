function convertTemperature() {
    // Variables
    let celsius = prompt("Enter the temperature in Celsius: ");
    let fahrenheit = (celsius * 9/5) + 32;
    let celsiusSPAN = document.getElementById("celsius")
    let fahrenheitSPAN = document.getElementById("fahrenheit")

    // Output
    celsiusSPAN.innerHTML = celsius;
    fahrenheitSPAN.innerHTML = fahrenheit;
}