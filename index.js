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
  let apiKey = "3f6be1c407b0d9d1933561808db358ba";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiURL).then(showTemp);
}

function formatDay(timestamp)
{
let date = new Date(timestamp * 1000);
let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];
return days[day];
}
function displayForecast(response){
  let forecast = response.data.daily;
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = `
<div class="container text-center">
            <div class="row row-cols-6">
                <div class="col">${formatDay(forecast[0].dt)} <br/>
                <img src="https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png" alt="Icon" width="50"/> <br/> ${Math.round(forecast[0].temp.min)}°|
            ${Math.round(forecast[0].temp.max)}°</div>
                <div class="col">${formatDay(forecast[1].dt)} <br/>
                 <img src="https://openweathermap.org/img/wn/${forecast[1].weather[0].icon}@2x.png" alt="Icon" width="50"/> <br/> ${Math.round(forecast[1].temp.min)}°|
            ${Math.round(forecast[1].temp.max)}°</div>
                <div class="col">${formatDay(forecast[2].dt)} <br/>
                 <img src="https://openweathermap.org/img/wn/${forecast[2].weather[0].icon}@2x.png" alt="Icon" width="50" /> <br/> ${Math.round(forecast[2].temp.min)}°|
            ${Math.round(forecast[2].temp.max)}°</div>
                <div class="col">${formatDay(forecast[3].dt)} <br/>
                 <img src="https://openweathermap.org/img/wn/${forecast[3].weather[0].icon}@2x.png" alt="Icon" width="50" /> <br/> ${Math.round(forecast[3].temp.min)}°|
        ${Math.round(forecast[3].temp.max)}°</div>
                <div class="col">${formatDay(forecast[4].dt)} <br/>
                 <img src="https://openweathermap.org/img/wn/${forecast[4].weather[0].icon}@2x.png" alt="Icon" width="50" /> <br/> ${Math.round(forecast[4].temp.min)}°|
            ${Math.round(forecast[4].temp.max)}°</div>
                <div class="col">${formatDay(forecast[5].dt)} <br/>
                     <img src="https://openweathermap.org/img/wn/${forecast[5].weather[0].icon}@2x.png" alt="Icon" width="50" /> <br /> ${Math.round(forecast[5].temp.min)}°|
                ${Math.round(forecast[5].temp.max)}°</div>
            </div>
        </div>`;
}

function getforcast(coordinates) {
let apiKey = "3f6be1c407b0d9d1933561808db358ba";
let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
axios.get(apiURL).then(displayForecast);
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
  let iconElement = document.querySelector("#icon")
  iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` );
   document.querySelector("#description").innerHTML = response.data.weather[0].description;

   getforcast(response.data.coord);
}
let form = document.querySelector("#weather-form");
form.addEventListener("submit", search);
 