function convertTemperature() {
    // Variables
    let option = document.getElementById("options").value;
    let temperature = document.getElementById("temperatureInput").value;
    let thermometerLiquid = document.querySelector('.liquid')
    let result = document.getElementById("result");
    let resultContainer = document.getElementById("result-container-id");
    let calculation = 0;
    var minTemp = -10;
    var maxTemp = 50;
    let temperatureCelsius = temperature;
    let percentage = 0;

    // Clean result container
    resultContainer.classList.remove("cold");
    resultContainer.classList.remove("normal");
    resultContainer.classList.remove("hot");

    if (temperature === "") {
        alert("Please enter a temperature");
        return;
    }

    if (option === "1") {
        // Celsius to Fahrenheit
        calculation = (temperature * 9 / 5) + 32;
        result.innerHTML = `${calculation.toFixed(2)} °F`;
        
        // Thermometer
        if (temperature < minTemp) temperatureCelsius = minTemp;
        if (temperature > maxTemp) temperatureCelsius = maxTemp;
        percentage = (temperatureCelsius - minTemp) / (maxTemp - minTemp) * 100;
        thermometerLiquid.style.height = percentage + '%';

        // DIV color
        if (calculation <= 59) {
            resultContainer.classList.add("cold");
            document.body.style.backgroundImage = "url('/img/cold.jpg')";
            document.body.style.backgroundSize = "cover";
        } else if (calculation >= 104) {
            resultContainer.classList.add("hot");
            document.body.style.backgroundImage = "url('/img/hot.jpg')";
            document.body.style.backgroundSize = "cover";
        } else {
            resultContainer.classList.add("normal");
            document.body.style.backgroundImage = "none";
        }
    } else {
        // Fahrenheit to Celsius
        calculation = (temperature - 32) * 5 / 9;
        temperatureCelsius = calculation;
        result.innerHTML = `${calculation.toFixed(2)} °C`;

        // Thermometer
        if (calculation < minTemp) temperatureCelsius = minTemp;
        if (calculation > maxTemp) temperatureCelsius = maxTemp;
        percentage = (temperatureCelsius - minTemp) / (maxTemp - minTemp) * 100;
        thermometerLiquid.style.height = percentage + '%';

        // DIV color
        if (calculation <= 15) {
            resultContainer.classList.add("cold");
            document.body.style.backgroundImage = "url('/img/cold.jpg')";
            document.body.style.backgroundSize = "cover";
        } else if (calculation >= 40) {
            resultContainer.classList.add("hot");
            document.body.style.backgroundImage = "url('/img/hot.jpg')";
            document.body.style.backgroundSize = "cover";
        } else {
            resultContainer.classList.add("normal");
            document.body.style.backgroundImage = "none";
        }
    }
}