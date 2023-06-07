function displayWeather(response) {
  console.log(response);
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.temperature.humidity);
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temperature");
  let humidityElement = document.querySelector("#current-humidity");
  cityElement.innerHTML = city;
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = humidity;
}

let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "";
axios.get(`${apiURL}&query=Tyler&key=${apiKey}`).then(displayWeather);
alert("Working");
