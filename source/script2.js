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
function displayForecastCelsius(response) {
  let forecast = response.data.daily[0];
  let forecastHTML = `<div class="row">`;
  let forecastDay = response.data.daily[0].time;
  let forecastIcon = response.data.daily[0].condition.icon_url;
  let forecastDescription = response.data.daily[0].condition.description;
  let forecastTempMax = Math.round(response.data.daily[0].temperature.maximum);
  let forecastTempMin = Math.round(response.data.daily[0].temperature.minimum);

  forecast.forEach(function (forecastDay) {
    forecastHTML += `<div class="col">${forecastDay}</div>
      <img src="${forecastIcon}" alt="${forecastDescription}" width="40">
      <div class="forecast-temp">
      <span class="forecast-temp-max">${forecastTempMax}°</span>
      <span class="forecast-temp-min">${forecastTempMin}°</span>
      </div>
      </div>`;
  });
  forecastElement.innerHTML = forecastHTML;
}

function displayForecastFahrenheit(response) {
  console.log(response.data);
}
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
  axios
    .get(
      `${apiForecastURL}&query=${searchInput.value}&key=${apiKey}&units=metric`
    )
    .then(displayForecastCelsius);
}

function toFahrenheit(event) {
  event.preventDefault();
  axios
    .get(`${apiURL}&query=${searchInput.value}&key=${apiKey}&units=imperial`)
    .then(displayWeatherFahrenheit);
  axios
    .get(
      `${apiForecastURL}&query=${searchInput.value}&key=${apiKey}&units=imperial`
    )
    .then(displayForecastFahrenheit);
}

// Variables
let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "https://api.shecodes.io/weather/v1/current?";
let apiForecastURL = "https://api.shecodes.io/weather/v1/forecast?";

let searchCityForm = document.querySelector("#search-engine-form");
let searchInput = document.querySelector("#search-engine-input");

let celsiusLink = document.querySelector("#celsius");
let fahrenheitLink = document.querySelector("#fahrenheit");

let forecastElement = document.querySelector("#forecasts");

// Events
searchCityForm.addEventListener("submit", toCelsius);
celsiusLink.addEventListener("click", toCelsius);
fahrenheitLink.addEventListener("click", toFahrenheit);
currentLocationButton.addEventListener("click", getLocation);
