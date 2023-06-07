function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#current-city");
  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = city;
  alert(temperature);
}

let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "";
axios.get(`${apiURL}&query=Tyler&key=${apiKey}`).then(displayTemperature);
alert("Working");
