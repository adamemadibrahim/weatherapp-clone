function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `/weather?city=${encodeURIComponent(cityInput)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    const cityName = document.createElement('h2');
    cityName.textContent = data.name;
    weatherInfo.appendChild(cityName);

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherInfo.appendChild(temperature);

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
    weatherInfo.appendChild(weatherDescription);
}
