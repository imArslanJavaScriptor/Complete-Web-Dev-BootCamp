document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "c2595b782c860fcc921cc71f2f551417";

  getWeatherBtn.addEventListener("click", async function () {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const watherData = await fetchWeatherData(city);
    } catch (error) {
      showError();
    }
  });

  function fetchWeatherData(city) {}

  function displayWeatherData(data) {}

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
