document.getElementById('convertBtn').addEventListener('click', function() {
    // Get input temperature and unit
    let temperature = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('unitSelect').value;

    // Validate input
    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    let result = {};
    let resultUnit;

    // Conversion logic
    if (unit === 'Celsius') {
        result = {
            Fahrenheit: (temperature * 9 / 5) + 32,
            Kelvin: temperature + 273.15
        };
        resultUnit = '°C';
    } else if (unit === 'Fahrenheit') {
        result = {
            Celsius: (temperature - 32) * 5 / 9,
            Kelvin: ((temperature - 32) * 5 / 9) + 273.15
        };
        resultUnit = '°F';
    } else if (unit === 'Kelvin') {
        result = {
            Celsius: temperature - 273.15,
            Fahrenheit: (temperature - 273.15) * 9 / 5 + 32
        };
        resultUnit = 'K';
    } else {
        alert("Please select a valid unit (Celsius, Fahrenheit, or Kelvin).");
        return;
    }

    // Display results (make sure results exist)
    document.getElementById('result').innerHTML = `
        Celsius: ${result.Celsius ? result.Celsius.toFixed(2) : 'N/A'} °C<br>
        Fahrenheit: ${result.Fahrenheit ? result.Fahrenheit.toFixed(2) : 'N/A'} °F<br>
        Kelvin: ${result.Kelvin ? result.Kelvin.toFixed(2) : 'N/A'} K
    `;
});
