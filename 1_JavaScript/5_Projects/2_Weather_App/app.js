document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const weatherIcon = document.getElementById("weather-icon");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "706e259ab8fb31a1827d3a6ef48c9845";

  // 1️⃣ Auto-load saved city on page load
  const savedCity = localStorage.getItem("lastCity");
  if (savedCity) {
    fetchWeatherData(savedCity)
      .then(displayWeatherData)
      .catch(showError);
  }

  // 2️⃣ Handle search click
  getWeatherBtn.addEventListener("click", async function () {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
      errorMessage.classList.add("hidden");

      // Save to local storage
      localStorage.setItem("lastCity", city);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const responeData = await fetch(url);
    if (!responeData.ok) {
      throw new Error("City not found");
    }
    const data = await responeData.json();
    return data;
  }

  function displayWeatherData(data) {
    weatherInfo.classList.remove("hidden");

    const { name, main, weather } = data;
    const temperature = Math.round(main.temp);
    const description = weather[0].description;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `${temperature}°C`;
    descriptionDisplay.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
