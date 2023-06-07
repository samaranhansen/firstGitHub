function displayTemperature(response) {
  let temperature = response.data.temperature.current;
  alert(temperature);
}

let apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
let apiURL = "";
axios.get(`${apiURL}&query=Tyler&key=${apiKsey}`).then(displayTemperature);
