// Time Formatting
function formatDate() {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = dayNames[currentTime.getDay()];
  let currentHours = currentTime.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let displayDate = `${currentDay} ${currentHours}:${currentMinutes}`;
  return displayDate;
}

let currentTime = new Date();
let dateTime = document.querySelector("#date-time");

// Variables
let currentCity = document.querySelector("#current-city");
let currentTemp = document.querySelector("#current-temp");
let currentPrecip = document.querySelector("#current-precip");
let currentHumid = document.querySelector("#current-humid");
let currentWind = document.querySelector("#current-wind");
let buttonCurrentLocation = document.querySelector("#search-current-location");
let searchForm = document.querySelector("#search-engine-form");

// Current Location
function defineWeather(response) {
  console.log(response);
  let temperature = Math.round(response.data.temperature.current);
  let tempDisplay = `${temperature}° C`;
  let humid = Math.round(response.data.temperature.humidity);
  let humidDisplay = `💧 ${humid}%`;
  let windspeed = Math.round(response.data.wind.speed);
  let windspeedDisplay = `💨 ${windspeed} MPS`;
  let city = response.data.city;
  currentCity.innerHTML = city;
  currentTemp.innerHTML = tempDisplay;
  currentHumid.innerHTML = humidDisplay;
  currentWind.innerHTML = windspeedDisplay;
  dateTime.innerHTML = formatDate(currentTime);
  console.log(response.data);
}

function usePosition(location) {
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;
  let apiWeatherKey = "444tf5d2456e80bfca6a8o00f90438b9";
  let apiWeatherURL = "https://api.shecodes.io/weather/v1/current?";
  axios
    .get(
      `${apiWeatherURL}&lat=${lat}&lon=${lon}&key=${apiWeatherKey}&units=metric`
    )
    .then(defineWeather);
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(usePosition);
}

// Search Engine
function defineWeatherSearch(response) {
  let temperature = Math.round(response.data.temperature.current);
  let tempDisplay = `${temperature}° C`;
  let humid = Math.round(response.data.temperature.humidity);
  let humidDisplay = `💧 ${humid}%`;
  let windspeed = Math.round(response.data.wind.speed);
  let windspeedDisplay = `💨 ${windspeed} MPS`;
  currentTemp.innerHTML = tempDisplay;
  currentHumid.innerHTML = humidDisplay;
  currentWind.innerHTML = windspeedDisplay;
  dateTime.innerHTML = formatDate(currentTime);
}

function changeConditions(response) {
  let cityName = response.data[0].city;
  currentCity.innerHTML = cityName;
  let latSearch = response.data[0].lat;
  let lonSearch = response.data[0].lon;
  let apiSearchKey = "444tf5d2456e80bfca6a8o00f90438b9";
  let apiSearchURL = "https://api.shecodes.io/weather/v1/current?";
  axios
    .get(
      `${apiSearchURL}&lat=${latSearch}&lon=${lonSearch}&appid=${apiSearchKey}&units=metric`
    )
    .then(defineWeatherSearch);
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-engine-input");
  if (searchInput.value === undefined || searchInput.value.length < 1) {
    alert("Please enter a valid city.");
  } else {
    let apiCityKey = "444tf5d2456e80bfca6a8o00f90438b9";
    let apiCityURL = "https://api.shecodes.io/weather/v1/current?";
    axios
      .get(`${apiCityURL}&query=${searchInput.value}&appid=${apiCityKey}`)
      .then(changeConditions);
  }
}

// Events

buttonCurrentLocation.addEventListener("click", getPosition);
searchForm.addEventListener("submit", changeCity);
