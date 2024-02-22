const API_KEY = "79013feaccbe68756ff38d2984524fe7";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span");
      const name = data.name;
      const main = data.weather[0].main;
      const temp = data.main.temp;
      weather.innerText = `#${name} #${main} #${temp}`;
    });
}
function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
