function convertTemperature() {
    // Variables
    const option = document.getElementById("options").value;
    const temperature = parseFloat(document.getElementById("temperatureInput").value);
    const thermometerLiquid = document.querySelector('.liquid');
    const result = document.getElementById("result");
    const resultContainer = document.getElementById("result-container-id");
    const minTemp = -10, maxTemp = 50;
    let temperatureCelsius, convertedTemp, percentage;

    // Validate input
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature");
        return;
    }

    // Determine conversion
    if (option === "1") {
        // Celsius to Fahrenheit
        convertedTemp = (temperature * 9 / 5) + 32;
        temperatureCelsius = Math.max(minTemp, Math.min(maxTemp, temperature));
        result.innerHTML = `${convertedTemp.toFixed(2)} °F`;
    } else {
        // Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5 / 9;
        temperatureCelsius = Math.max(minTemp, Math.min(maxTemp, convertedTemp));
        result.innerHTML = `${convertedTemp.toFixed(2)} °C`;
    }

    // Update thermometer
    percentage = ((temperatureCelsius - minTemp) / (maxTemp - minTemp)) * 100;
    thermometerLiquid.style.height = `${percentage}%`;

    // Update styles and background
    resultContainer.className = "result-container"; // Reset classes
    if (convertedTemp <= (option === "1" ? 59 : 15)) {
        resultContainer.classList.add("cold");
        document.body.style.backgroundImage = "url('img/cold.jpg')";
    } else if (convertedTemp >= (option === "1" ? 104 : 40)) {
        resultContainer.classList.add("hot");
        document.body.style.backgroundImage = "url('img/hot.jpg')";
    } else {
        resultContainer.classList.add("normal");
        document.body.style.backgroundImage = "none";
    }
    document.body.style.backgroundSize = "cover";
}
