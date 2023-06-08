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

function displayWeather(response) {
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
  windspeedElement.innerHTML = `🍃 ${windspeed} mps`;
  descriptionElement.innerHTML = description;
  datetimeElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-engine-input");
  let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
  let apiURL = "https://api.shecodes.io/weather/v1/current?";
  axios
    .get(`${apiURL}&query=${searchInput.value}&key=${apiKey}&units=metric`)
    .then(displayWeather);
}

let searchCityForm = document.querySelector("#search-engine-form");
searchCityForm.addEventListener("submit", search);
