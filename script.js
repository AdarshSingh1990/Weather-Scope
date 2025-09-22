document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("city").value.trim(); // Trim spaces
    if (!city) {
        document.getElementById("weatherInfo").innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    console.log("API Request URL:", url); // Debugging URL

    fetch(url)
        .then(response => {
            console.log("Response Status:", response.status); // Log response status
            if (!response.ok) {
                throw new Error("City not found. Please check the name and try again.");
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather Data:", data); // Log data for debugging
            const weatherInfo = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error:", error.message); // Log the error for debugging
            document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
        });
});
