let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];
let hour = now.getHours();
let minuet = now.getMinutes();
let date = document.querySelector("#date-time");
date.innerHTML=(`${day} ${hour}:${minuet}`);


function search(event) {
  event.preventDefault();
  let place = document.querySelector("#place-input");
  searchCity(place.value);
}

function searchCity(city) {
  let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiURL).then(showTemp);
}

function showTemp(response) {
  document.querySelector("#main-city").innerHTML = response.data.name;
  document.querySelector("#degree-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
let form = document.querySelector("#weather-form");
form.addEventListener("submit", search);
 