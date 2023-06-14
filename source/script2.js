// Time Formatting
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayNames[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

// Forecast Display
function displayForecastCelcius(response) {}

function displayForecastFahrenheit(response) {}

// Weather Display
function displayWeatherCelsius(response) {
  console.log(response.data);
  let cityName = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.data.temperature.humidity);
  let windspeed = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;
  let icon = response.data.condition.icon;
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temp");
  let humidityElement = document.querySelector("#current-humid");
  let windspeedElement = document.querySelector("#current-wind");
  let descriptionElement = document.querySelector("#current-desc");
  let datetimeElement = document.querySelector("#current-datetime");
  let iconElement = document.querySelector("#desc-icon");
  console.log(temperature);
  cityElement.innerHTML = cityName;
  temperatureElement.innerHTML = `${temperature}°`;
  humidityElement.innerHTML = `🌫 ${humidity}% humidity`;
  windspeedElement.innerHTML = `🍃 ${windspeed} mps windspeed`;
  descriptionElement.innerHTML = description;
  datetimeElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

function displayWeatherFahrenheit(response) {
  console.log(response.data);
  let cityName = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.data.temperature.humidity);
  let windspeed = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;
  let icon = response.data.condition.icon;
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temp");
  let humidityElement = document.querySelector("#current-humid");
  let windspeedElement = document.querySelector("#current-wind");
  let descriptionElement = document.querySelector("#current-desc");
  let datetimeElement = document.querySelector("#current-datetime");
  let iconElement = document.querySelector("#desc-icon");
  console.log(temperature);
  cityElement.innerHTML = cityName;
  temperatureElement.innerHTML = `${temperature}°`;
  humidityElement.innerHTML = `🌫 ${humidity}% humidity`;
  windspeedElement.innerHTML = `🍃 ${windspeed} mph windspeed`;
  descriptionElement.innerHTML = description;
  datetimeElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function toCelsius(event) {
  event.preventDefault();
  axios
    .get(`${apiURL}&query=${searchInput.value}&key=${apiKey}&units=metric`)
    .then(displayWeatherCelsius);
}

function toFahrenheit(event) {
  event.preventDefault();
  axios
    .get(`${apiURL}&query=${searchInput.value}&key=${apiKey}&units=imperial`)
    .then(displayWeatherFahrenheit);
}

// Variables
let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "https://api.shecodes.io/weather/v1/current?";

let searchCityForm = document.querySelector("#search-engine-form");
let searchInput = document.querySelector("#search-engine-input");

let celsiusLink = document.querySelector("#celsius");
let fahrenheitLink = document.querySelector("#fahrenheit");

// Events
searchCityForm.addEventListener("submit", toCelsius);
celsiusLink.addEventListener("click", toCelsius);
fahrenheitLink.addEventListener("click", toFahrenheit);
