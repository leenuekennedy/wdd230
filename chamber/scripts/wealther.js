// Select HTML elements
const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");
const forecastList = document.querySelector("#forecast-list");
const banner = document.getElementById("banner");
const closeBanner = document.getElementById("close-banner");

// OpenWeatherMap API Key (Use your existing one)
const apiKey = "YOUR_API_KEY";  // Replace with your actual API key
const lat = 49.75;  // Replace with your chamber location latitude
const lon = 6.64;   // Replace with your chamber location longitude
const units = "imperial"; // 'metric' for Celsius, 'imperial' for Fahrenheit

// URLs for fetching weather data
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

// Fetch and display current weather
async function fetchWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();

        currentTemp.textContent = Math.round(data.main.temp);
        weatherDesc.textContent = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching current weather:", error);
    }
}

// Fetch and display 3-day forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error("Failed to fetch forecast data");
        const data = await response.json();
        
        // Process forecast data for 3 days (choosing noon temperatures)
        const dailyForecast = {};
        data.list.forEach(item => {
            const date = item.dt_txt.split(" ")[0];
            if (!dailyForecast[date] && item.dt_txt.includes("12:00:00")) {
                dailyForecast[date] = item;
            }
        });

        forecastList.innerHTML = ""; // Clear previous forecasts
        Object.values(dailyForecast).slice(0, 3).forEach(day => {
            const temp = Math.round(day.main.temp);
            const desc = day.weather[0].description;
            const icon = day.weather[0].icon;
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
                ${temp}°F - ${desc}
            `;
            forecastList.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

// Show banner only on Monday, Tuesday, and Wednesday
function checkBannerDisplay() {
    const today = new Date().getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday
    if (today >= 1 && today <= 3) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

// Close banner on button click
closeBanner.addEventListener("click", () => {
    banner.style.display = "none";
});

// Run functions
fetchWeather();
fetchForecast();
checkBannerDisplay();
