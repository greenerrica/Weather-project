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
  let city = document.querySelector("#main-city");
  let place = document.querySelector("#place-input");
  city.innerHTML = `${place.value}`;
  searchCity(place.value);
}

function searchCity(city) {
  let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiURL).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentDegree = document.querySelector(".degree");
  currentDegree.innerHTML = `${temperature}°F`;
}
let form = document.querySelector("#weather-form");
form.addEventListener("submit", search);
 