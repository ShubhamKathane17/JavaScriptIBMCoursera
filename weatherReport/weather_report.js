function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = document.getElementById('lattitude').value;
    const lon = document.getElementById('longitude').value;

    const apiKey = '61538d8c3bd81d2cf860681066aa5702'; // Replace with your actual API key
    let apiUrl;

    // Check if latitude and longitude are provided, otherwise use city
    if (lat && lon) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Please enter either a city or both latitude and longitude.</p>`;
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
