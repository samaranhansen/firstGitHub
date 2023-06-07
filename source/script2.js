function displayWeather(response) {
  alert("Working");
  console.log(response.data);
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.data.temperature.humidity);
  let windspeed = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temp");
  let humidityElement = document.querySelector("#current-humid");
  let windspeedElement = document.querySelector("#current-wind");
  let descriptionElement = document.querySelector("#current-description");
  console.log(temperature);
  cityElement.innerHTML = city;
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = humidity;
  windspeedElement.innerHTML = windspeed;
  descriptionElement.innerHTML = description;
}

let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "https://api.shecodes.io/weather/v1/current?";
axios.get(`${apiURL}&query=Tyler&key=${apiKey}`).then(displayWeather);
