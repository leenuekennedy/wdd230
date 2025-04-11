const url = `https://api.openweathermap.org/data/2.5/forecast?q=Cozumel,mx&appid=YOUR_API_KEY&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const now = data.list[0];
    const forecast = data.list.find(f => f.dt_txt.includes("15:00:00"));
    const messageBanner = document.getElementById("messageBanner");
    messageBanner.innerHTML = `<div class="banner"><p>High Temp Today: ${now.main.temp_max}°C</p><span onclick="this.parentElement.style.display='none';">✖</span></div>`;

    document.getElementById("main").textContent = now.weather[0].main;
    document.getElementById("description").textContent = now.weather[0].description;
    document.getElementById("temp").textContent = now.main.temp;
    document.getElementById("humidity").textContent = now.main.humidity;
    document.getElementById("forecast").textContent = forecast.main.temp;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${now.weather[0].icon}.png`;
  });
