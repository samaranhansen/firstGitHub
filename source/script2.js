function displayWeather(response) {
  console.log(response);
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.temperature.humidity);
  let windspeed = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temperature");
  let humidityElement = document.querySelector("#current-humid");
  let windspeedElement = document.querySelector("#current-wind");
  let descriptionElement = document.querySelector("#current-description");
  cityElement.innerHTML = city;
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = humidity;
  windspeedElement.innerHTML = windspeed;
  descriptionElement.innerHTML = description;
}

let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "";
axios.get(`${apiURL}&query=Tyler&key=${apiKey}`).then(displayWeather);
alert("Working");
