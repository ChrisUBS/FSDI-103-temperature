function start() {
    // Get the variables from the user
    let startValue = Number(prompt("Enter the starting temperature: "));
    let endValue = Number(prompt("Enter the ending temperature: "));
    let scale = prompt("Enter the scale ('C' for Celsius or 'F' for Fahrenheit)");
    while (scale !== 'C' && scale !== 'F') {
        scale = prompt("Please enter 'C' or 'F' for the scale");
    }

    // Call the function to convert the temperature range
    convertTemperatureRange(startValue, endValue, scale);
}

// Function to convert the temperature range
function convertTemperatureRange(startValue, endValue, scale) {
    let output = document.getElementById('output');
    output.innerHTML = '';

    for (let i = startValue; i <= endValue; i++) {
        let convertedValue = ((scale === 'C') ? convertCelsiusToFahrenheit(i).toFixed(2) : convertFahrenheitToCelsius(i).toFixed(2));
        console.log(`${i} degrees ${scale} is equal to ${convertedValue} degrees ${scale === 'C' ? 'F' : 'C'}`);
        output.innerHTML += `<li>${i} degrees ${scale} is equal to ${convertedValue} degrees ${scale === 'C' ? 'F' : 'C'}</li>`;
    }
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
